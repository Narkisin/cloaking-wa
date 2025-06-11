let fingerprints = new Set();

export async function POST(req) {
  const { fingerprint } = await req.json();
  if (fingerprints.has(fingerprint)) {
    return Response.json({ status: "repetido" });
  }
  fingerprints.add(fingerprint);
  return Response.json({ status: "ok" });
}
if (req.method === 'OPTIONS') {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

return new Response(JSON.stringify({ status: "ok" }), {
  status: 200,
  headers: {
    "Access-Control-Allow-Origin": "*", // o tu dominio específico
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  }
});
