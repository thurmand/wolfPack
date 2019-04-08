// @flow weak

import { create } from "jss";
import preset from "jss-preset-default";
import { SheetsRegistry } from "react-jss";
import { createMuiTheme } from "@material-ui/core/styles";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";

import Theme from "./theme/index";

let themeBase = Theme;

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: themeBase.primary[300],
      main: themeBase.primary[500],
      dark: themeBase.primary[700]
    },
    secondary: {
      light: themeBase.secondary[300],
      main: themeBase.secondary[500],
      dark: themeBase.secondary[700]
    }
  },
  overrides: {
    MuiButton: {
      raisedSecondary: {
        color: "white"
      }
    }
  }
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

function createContext() {
  return {
    jss,
    theme: muiTheme, // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(), // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry()
  };
}

export default function getMuiContext() {
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

export { muiTheme };
