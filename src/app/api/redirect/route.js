export async function GET(req) {
  const userAgent = req.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

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
  const url = `https://wa.me/${random}?text=${mensaje}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Redireccionando a WhatsApp...</title>
        <!-- Meta Pixel Code -->
        <script>
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1064777905551595');
          fbq('trackCustom', 'whatsapp_click');
        </script>
        <meta http-equiv="refresh" content="1;url=${url}">
      </head>
      <body>
        Redirigiendo a WhatsApp...
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
