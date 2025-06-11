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

  const status = fingerprints.has(fingerprint) ? "repetido" : "ok";

  if (status === "ok") {
    fingerprints.add(fingerprint);
  }

  return new Response(JSON.stringify({ status }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}
