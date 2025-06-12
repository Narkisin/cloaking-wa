// archivo: api/track-click/route.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zukdxdnwlyiuphgjuqdd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1a2R4ZG53bHlpdXBoZ2p1cWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDIxNTUsImV4cCI6MjA2NTMxODE1NX0.jTARZs7s7w08gLF4D78WoOlKuExaC3w_ed3An6_Fuk0'
);

async function enviarEventoMetaPixel({ pixelId, token, eventName, userEmail, buttonLabel, pageUrl }) {
  const evento = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: pageUrl,
        user_data: {
          em: CryptoJS.SHA256(userEmail).toString(CryptoJS.enc.Hex),
          client_user_agent: '',
        },
        custom_data: {
          button_label: buttonLabel,
        }
      }
    ]
  };

  const res = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(evento)
  });

  return res.json();
}

export async function POST(req) {
  const body = await req.json();

  // Guardar en Supabase
  await supabase.from('clicks').insert({ ...body, time: new Date().toISOString() });

  // Enviar a Meta Pixel
  const respuestaMeta = await enviarEventoMetaPixel({
    pixelId: body.pixelId,
    token: body.token,
    eventName: 'Lead',
    userEmail: body.userEmail,
    buttonLabel: body.buttonLabel,
    pageUrl: body.pageUrl
  });

  return new Response(JSON.stringify({ status: 'ok', meta: respuestaMeta }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    }
  });
}
