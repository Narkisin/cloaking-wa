export async function GET(req) {
  const data = {
    meta_pixel_id: "1220554166264708",
    token: "EAAJqESPU6y8BO5FrkitBLzUZCsxFLzZCEmnvvXZBMLGJjVwdzUSZBE6UGjNW0GxGDQS6RB8ZCOya3FDTLU7EZCq8Th69DW9VidMFTJh18e8v18V8oAE9FwMM4d35Y6fPqHz5tZBi8dTk5BN1UUPyIACVA8rhxtrKIbHDgbZBRdO8Wyl0REZBxY6lJ7WVJzZBtngejNul5F6qtV3PxcwpCIHPgQF5JkdW6ZCHFc38VjcgHSbAO00x53gLRTWqAzPUEVDZBQNTXwj2xGQJfejoPssZD",
    email: "oscar882901@gmail.com",
    mensaje_wpp: "Hola! Venngo de arbitrade",
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
