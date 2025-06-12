export async function GET(req) {
  const data = {
    meta_pixel_id: "1064777905551595",
    token: "EAAJqESPU6y8BOwNmZCM7OQbSu2HHVRoQOenpR9zdAK5ZCM1G0tkqPrSZAOtqnjsRLqGn3TGr9UzNSCcai0smI3Los96vYfAosLExxh1ainwGYZALmoO3cbshcpiuWztrDSRc2Em6Bdu1eBZCWNjVqz1zPAzY1MsqnPRZCOcQD6FBbIvQXCtfCUxWZBlDhQBMwUAshEriSweJFfxBjDbzyZBupcjqxOvLREsSHM89wQZDZD",
   
         
    email: "oscar882901@gmail.com",
    mensaje_wpp: "Hola! Vengo de arbitrade",
    dominio: "arbitrade.lat",
    numeros: [
      "5491127455503",
      "5491171465461",
      "5491171489956",
      "5491171501589",
      "5491176299030"
    ]
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://arbitrade.lat",
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
