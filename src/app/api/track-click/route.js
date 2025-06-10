let clicks = [];

export async function POST(req) {
  const body = await req.json();
  clicks.push({ ...body, time: new Date().toISOString() });
  return Response.json({ status: "ok" });
}

export function GET() {
  return Response.json(clicks);
}
