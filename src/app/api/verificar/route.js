let fingerprints = new Set();

export async function POST(req) {
  const { fingerprint } = await req.json();
  const isRepeated = fingerprints.has(fingerprint);
  if (!isRepeated) fingerprints.add(fingerprint);

  return new Response(JSON.stringify({ status: isRepeated ? "repetido" : "ok" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // o poné tu dominio exacto aquí si querés restringir
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://arbitrade.lat",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}
