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
    meta_pixel_id: "1064777905551595",
    token: "EAAd5DkpOUEYBO31PMglMeXQ7ZCZCaU1SFdVciMV2gsnXc3VJfm0SAYZBhFuMWyzZB3RUBbwmKLoyHjsbqABkZAHzikroES0jeGk3ZAfsvxO8WTMMtR8Q8WhJtCnJ4cSWMNW8ZC6BMnMrk5oiITIBlpWZC5NAsnx9VWa46sWOZBLdeOjXzphCc86CGxFGe0bjdCBlUzAZDZD", // tu token completo
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
