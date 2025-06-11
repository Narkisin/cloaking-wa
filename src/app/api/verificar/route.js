export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // permite desde cualquier origen
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}

export async function GET() {
  return new Response(JSON.stringify({
    meta_pixel_id: "1220554166264708",
    token: "224a105d0c07616da76d0262438e75cb", // tu token completo
    email: "oscar882901@gmail.com",
    mensaje_wpp: "Hola! Vengo de arbitrade",
    dominio: "arbitrade.lat",
    numeros: [
      "5491171464849",
      "5491171756767",
      "5491171464592",
      "5491127455503",
      "5491171465461",
      "5491171501589",
      "5491171489956",
      "5491176298293"
    ]
  }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // permite desde todos los orígenes
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }
  });
}
