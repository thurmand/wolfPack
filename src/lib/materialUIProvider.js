import React, { Component } from "react";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import getMuiContext from "./getMuiContext";
// import "typeface-roboto";

const styles = theme => ({
  "@global": {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    body: {
      margin: 0
    }
  }
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

class MaterialUIProvider extends Component {
  constructor(props) {
    super(props);
    this.stylesContext = getMuiContext();
  }

  componentDidMount() {
    // removes server side injected css
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MuiThemeProvider
        theme={this.stylesContext.theme}
        sheetsManager={this.stylesContext.sheetsManager}
      >
        <AppWrapper>{this.props.children}</AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default MaterialUIProvider;
