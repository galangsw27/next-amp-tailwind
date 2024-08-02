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
    return (
      <Html>
        <Head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
