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
