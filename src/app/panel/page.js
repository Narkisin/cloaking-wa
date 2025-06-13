
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabase = createClient(
  "https://zukdxdnwlyiuphgjuqdd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a2R4ZG53bHlpdXBoZ2p1cWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDIxNTUsImV4cCI6MjA2NTMxODE1NX0.jTARZs7s7w08gLF4D78WoOlKuExaC3w_ed3An6_Fuk0"
);

export default function ClicksPanel() {
  const [clicks, setClicks] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetchClicks();
  }, [selectedDate]);

  const fetchClicks = async () => {
    try {
      const from = selectedDate ? new Date(selectedDate) : null;
      const to = selectedDate ? new Date(selectedDate) : null;
      if (from && to) {
        from.setHours(0, 0, 0, 0);
        to.setHours(23, 59, 59, 999);
      }

      let query = supabase
        .from('clicks')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (from && to) {
        query = query
          .gte('created_at', from.toISOString())
          .lte('created_at', to.toISOString());
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error cargando clics:', error);
      } else {
        setClicks(data);
      }
    } catch (err) {
      console.error("Error inesperado:", err);
    }
  };

  const filtrados = clicks.filter((click) => {
    const texto = filtro.toLowerCase();
    return (
      click.user_email?.toLowerCase().includes(texto) ||
      click.button_label?.toLowerCase().includes(texto) ||
      click.page_url?.toLowerCase().includes(texto)
    );
  });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4 gap-2">
        <h2 className="text-2xl font-bold">Historial de Clics</h2>
        <Button onClick={fetchClicks}>🔄 Recargar</Button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-auto"
        />
        <Button variant="outline" onClick={() => setSelectedDate('')}>
          Limpiar filtro
        </Button>
        <div className="ml-auto font-semibold">Total: {filtrados.length} clics</div>
      </div>

      <Input
        placeholder="Buscar por email, botón o URL..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="mb-4"
      />

      <ScrollArea className="h-[600px] border rounded-md p-2">
        <div className="space-y-2">
          {filtrados.map((click, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-4 text-sm space-y-1">
                <div><strong>🕒 Fecha:</strong> {new Date(click.created_at).toLocaleString()}</div>
                <div><strong>📧 Email:</strong> {click.user_email}</div>
                <div><strong>🔘 Botón:</strong> {click.button_label}</div>
                <div><strong>🔗 URL:</strong> {click.page_url}</div>
                <div><strong>🆔 Fingerprint:</strong> {click.fingerprint}</div>
                <div><strong>🌍 IP:</strong> {click.ip}</div>
                <div><strong>🗺️ Ciudad:</strong> {click.ciudad}</div>
                <div><strong>🗺️ Región:</strong> {click.region}</div>
                <div><strong>🏳️ País:</strong> {click.pais}</div>
                <div><strong>🕓 Zona horaria:</strong> {click.timezone}</div>
                <div><strong>🧠 User-Agent:</strong> {click.user_agent}</div>
                <div><strong>🖥️ Resolución:</strong> {click.screen}</div>
                <div><strong>🌐 Idioma:</strong> {click.idioma}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
