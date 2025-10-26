import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Favicon untuk semua halaman */}
        <link rel="icon" href="/5988576.png" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CCTFYT265P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CCTFYT265P');
          `,
        }}
      />

      
      {/* Kode Histats Global */}
      <Script
        id="histats"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _Hasync= _Hasync|| [];
            _Hasync.push(['Histats.start', '1,4828760,4,0,0,0,00010000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function() {
              var hs = document.createElement('script');
              hs.type = 'text/javascript';
              hs.async = true;
              hs.src = ('//s10.histats.com/js15_as.js');
              (document.getElementsByTagName('head')[0] || document.body).appendChild(hs);
            })();
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
