import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Unbounded:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(92533430, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
   if (document.readyState !== 'loading') {
    us_sendMerticsByClickOnExternalLink();
  } else {
    document.addEventListener('DOMContentLoaded', us_sendMerticsByClickOnExternalLink);
  }

  function us_sendMerticsByClickOnExternalLink() {
    var links = document.querySelectorAll('[href="https://wa.me/79789543321"]');
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function () {
        var url = link.getAttribute('href');
        if (window.mainMetrikaId !== undefined) {
          yaCounter87782249.reachGoal('WA');
        }
        if (url && url.indexOf('http://') !== -1) {
          setTimeout(function () {
            window.location.href = url;
          }, 500);
        }
      }); `,
          }}
          
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/92533430"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
