let fingerprints = new Set();

export async function POST(req) {
  const { fingerprint } = await req.json();
  if (fingerprints.has(fingerprint)) {
    return Response.json({ status: "repetido" });
  }
  fingerprints.add(fingerprint);
  return Response.json({ status: "ok" });
}
