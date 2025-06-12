let fingerprints = new Set();

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

export async function POST(req) {
  const { fingerprint } = await req.json();

  const userAgent = req.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  // Solo registrar si no es bot
  if (!isBot) {
    fingerprints.add(fingerprint);
    console.log("🔍 Fingerprint registrado:", fingerprint);
  } else {
    console.warn("🤖 Bot detectado, fingerprint ignorado:", fingerprint);
  }

  return new Response(JSON.stringify({
    status: "ok",
    bot: isBot
  }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}
