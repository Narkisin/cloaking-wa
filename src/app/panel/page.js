import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const supabase = createClient(
  'https://zukdxdnwlyiuphgjuqdd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a2R4ZG53bHlpdXBoZ2p1cWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDIxNTUsImV4cCI6MjA2NTMxODE1NX0.jTARZs7s7w08gLF4D78WoOlKuExaC3w_ed3An6_Fuk0'
)

export default function ClicksPanel() {
  const [clicks, setClicks] = useState([])

  useEffect(() => {
    fetchClicks()
  }, [])

  const fetchClicks = async () => {
    const { data, error } = await supabase
      .from('clicks')
      .select('*')
      .order('time', { ascending: false })
      .limit(100)

    if (error) {
      console.error('Error cargando clics:', error)
    } else {
      setClicks(data)
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Historial de Clics</h2>
      <ScrollArea className="h-[500px] rounded border">
        <div className="p-2 space-y-2">
          {clicks.map((click, index) => (
            <Card key={index} className="border shadow">
              <CardContent className="p-3 text-sm">
                <div><strong>Fecha:</strong> {new Date(click.time).toLocaleString()}</div>
                <div><strong>Email:</strong> {click.userEmail}</div>
                <div><strong>Botón:</strong> {click.buttonLabel}</div>
                <div><strong>URL:</strong> {click.pageUrl}</div>
                <div><strong>Fingerprint:</strong> {click.fingerprint}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
