export async function GET(req) {
  const userAgent = req.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  if (isBot) {
    return Response.redirect('/404.html', 302);
  }

  const numbers = [
    "5491112345678",
    "5491134567890",
    "5491176543210"
  ];
  const mensaje = encodeURIComponent("Hola! vengo de arbitrade"); 
  const random = numbers[Math.floor(Math.random() * numbers.length)];

  return Response.redirect(`https://wa.me/${random}?text=${mensaje}`, 302);
}
