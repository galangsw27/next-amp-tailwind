// @ts-ignore
import bundleCss from "!raw-loader!../style/bundle.css";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
    
    const initialProps: any = await Document.getInitialProps(ctx);
    return {
      ...page,
      styles: [
        
        ...initialProps.styles,
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: bundleCss,
          }}
        />,
      ],
    };
  }

  
  render() {
    const addJsonLd = () => {
      return {
        __html: `
        [
        {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "KEDAN JOS",
  "description": "Temukan berbagai bonus menarik dari agen KEDANJOS.",
  "image": "https://kedanjosss88.lol/logo.png",
  "author": {
    "@type": "Person",
    "name": "KEDAN JOS"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KEDAN JOS",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kedanjosss88.lol/logo.png"
    }
  },
  "datePublished": "2024-08-07",
  "dateModified": "2024-08-07"
},

     {
        "@context": "https://schema.org/",
        "@type": "ImageObject",
        "contentUrl": "https://kedanjos27.org/resources/images/logo.png",
        "creditText": "Kedan JOS",
        "creator": {
          "@type": "Person",
          "name": "Kedan JOS"
         },
        "copyrightNotice": "Kedan JOS"
      },
     {
        "@context": "https://schema.org/",
        "@type": "ImageObject",
        "contentUrl": "https://i.imgur.com/80KgpLd_d.webp?maxwidth=760&fidelity=grand",
       "creditText": "Kedan JOS",
        "creator": {
          "@type": "Person",
          "name": "Kedan JOS"
         },
        "copyrightNotice": "Kedan JOS"
     }
      
    ]
        `
      }
    }
  
    return (
      <Html>
        <Head>
        <title>KEDANJOS ⚫️ Situs Bonus yang Menggiurkan.</title>

        <meta name="description" content="Temukan berbagai bonus menarik dari agen KEDANJOS."/>
        <meta name="keywords" content="Login kedanjos, Registrasi kedanjos Daftar kedanjos, Situs Official kedanjos kedan jos, kedanjos, kedan jos"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google-site-verification" content="fpNAEwPosKCY0GQMIvmoimu2t4hjp98u8yjAI5yF2qE"></meta>
        <meta name="og:title" content="KEDANJOS⚈Keistimewaan Bonus dari PG Soft untuk Pengalaman Game Terbaik."/>
        <meta property="og:description" content="KEDANJOS - SITUS PERMAINAN ONLINE RESMI DAN TERPERCAYA DI INDONESIA SEASIA - BOLA SEDUNIA - AGEN TOGEL - LIVEGAME - FIHISING GAME - GAME MULTIVERSE"></meta>
        <meta name="categories" content="kedanjos,daftar kedanjos,login kedanjos."/>
        <meta name="copyright" content="KEDANJOS"/>
        <meta name="author" content="KEDANJOS"/>
        <meta name="publisher" content="KEDANJOS"/>
        <meta name="distribution" content="global"/>
    
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={addJsonLd()}
      key="item-jsonld"
    />
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
