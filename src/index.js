import React from "react";
import AppBanner from "./components/app-bar";
import AppBody from "./app-body";
import { createComponentWithProxy } from "react-fela";

class Index extends React.Component {
  render() {
    return (
      <>
        <AppBanner />
        <Container>
          <AppBody />
        </Container>
      </>
    );
  }
}

const Container = createComponentWithProxy(({ theme }) => ({
  height: "calc(100vh - 88px)",
  width: "auto",
  overflow: "auto",
  padding: "12px"
}));

export default Index;
