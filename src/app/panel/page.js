"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const supabase = createClient(
  'https://zukdxdnwlyiuphgjuqdd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a2R4ZG53bHlpdXBoZ2p1cWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDIxNTUsImV4cCI6MjA2NTMxODE1NX0.jTARZs7s7w08gLF4D78WoOlKuExaC3w_ed3An6_Fuk0'
);

export default function ClicksPanel() {
  const [clicks, setClicks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClicks();
  }, []);

  const fetchClicks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('clicks')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('❌ Error cargando clics:', error);
    } else {
      setClicks(data);
    }
    setLoading(false);
  };

  const filteredClicks = clicks.filter(click =>
    click.user_email?.toLowerCase().includes(search.toLowerCase()) ||
    click.button_label?.toLowerCase().includes(search.toLowerCase()) ||
    click.page_url?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Historial de Clics</h2>

      <div className="flex items-center gap-2 mb-4">
        <Input
          placeholder="Buscar por email, botón o URL..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button onClick={fetchClicks} disabled={loading}>
          {loading ? 'Cargando...' : 'Recargar'}
        </Button>
      </div>

      <ScrollArea className="h-[500px] rounded border">
        <div className="p-2 space-y-2">
          {filteredClicks.length === 0 && (
            <div className="text-gray-500">No se encontraron registros.</div>
          )}
          {filteredClicks.map((click, index) => (
            <Card key={index} className="border shadow">
              <CardContent className="p-3 text-sm space-y-1">
                <div><strong>Fecha:</strong> {new Date(click.created_at).toLocaleString()}</div>
                <div><strong>Email:</strong> {click.user_email}</div>
                <div><strong>Botón:</strong> {click.button_label}</div>
                <div><strong>URL:</strong> {click.page_url}</div>
                <div><strong>Fingerprint:</strong> {click.fingerprint}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
