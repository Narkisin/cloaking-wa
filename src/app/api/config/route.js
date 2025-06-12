export async function GET(req) {
  const data = {
    meta_pixel_id: "1064777905551595",
    token: "EAAd5DkpOUEYBOZClFZBt0Gf09KvKd4tZARomvkzyoiWcEjPufdLHBQeCAgub1Eu30vyw98AZAdCbTIEEmZBttfZAvOYNvQDVSvm8sXG6ZA8hYOwJETj7LZCRF6odeskOME3ZAINseZA2cy11dX7YwAylNGuZCCE5nRpGUraRS6QxLO1Cdn6Bhrfhrol46x3Qkbk5wZDZD",
   
         
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
