import React from "react";
import { Component } from "react";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import Theme from "./theme/index";

export default class FelaProvider extends Component {
  render() {
    if (this.context.renderer) {
      return this.props.children;
    }

    const renderer = createRenderer();
    return (
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={Theme}>{this.props.children}</ThemeProvider>
      </RendererProvider>
    );
  }
}
