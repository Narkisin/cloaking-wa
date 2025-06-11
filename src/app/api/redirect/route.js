export async function GET(req) {
  const userAgent = req.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  if (isBot) {
    return Response.redirect('/404.html', 302);
  }

  const numbers = [
      "5491127455503",
"5491127455606",
"5491171465461",
"5491171489956",
"5491171501589",
"5491176299030"
  ];
  const mensaje = encodeURIComponent("Hola! vengo de arbitrade"); 
  const random = numbers[Math.floor(Math.random() * numbers.length)];

  return Response.redirect(`https://wa.me/${random}?text=${mensaje}`, 302);
}
