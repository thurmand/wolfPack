import React from "react";
import App, { Container } from "next/app";
import FelaProvider from "../src/lib/felaProvider";
import MaterialUIProvider from "../src/lib/materialUIProvider";

class RootNode extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MaterialUIProvider>
          <FelaProvider>
            <Component {...pageProps} />
          </FelaProvider>
        </MaterialUIProvider>
      </Container>
    );
  }
}

export default RootNode;
