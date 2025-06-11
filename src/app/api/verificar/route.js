let fingerprints = new Set();

export async function POST(req) {
  const { fingerprint } = await req.json();

  if (!fingerprint) {
    return new Response(JSON.stringify({ status: "error", message: "Fingerprint faltante" }), {
      status: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    });
  }

  if (fingerprints.has(fingerprint)) {
    return new Response(JSON.stringify({ status: "repetido" }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    });
  }

  fingerprints.add(fingerprint);

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

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
