import Document, { Head, Main, NextScript } from "next/document";
import getMuiContext from "../src/lib/getMuiContext";
import FelaProvider from "../src/lib/felaProvider";
import getFelaRenderer from "../src/lib/getFelaRender";
import { renderToSheetList } from "fela-dom";
import { JssProvider } from "react-jss";

class MyDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    const context = getMuiContext();
    const serverRenderer = getFelaRenderer();

    const page = renderPage({
      enhanceApp: App => props => (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <FelaProvider renderer={serverRenderer}>
            <App {...props} />
          </FelaProvider>
        </JssProvider>
      ),
      enhancePage: Page => Page
    });
    // This has to occur after renderPage, so that styles will exist.
    const sheetList = renderToSheetList(serverRenderer);

    let returnedProps = {
      ...page,
      sheetList,
      stylesContext: context,
      styles: (
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: context.sheetsRegistry.toString()
          }}
        />
      )
    };

    if (req && req.session && req.session.user) {
      returnedProps.storeNumber = req.session.user.storeNumber;
      returnedProps.loginStoreNumber = req.session.user.loginStoreNumber;
      returnedProps.workstationName = req.session.user.workstationName;
      returnedProps.oid = req.session.user.oid;
    }

    return returnedProps;
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <style>{`body { padding: 0px } /* custom! */`}</style>
        </Head>
        <body style={{ height: "100vh", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
