import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";

const AppBarContainer = createComponentWithProxy(() => ({
  height: "64px",
  width: "100vw",
  zIndex: 2
}));

export default function AppBanner() {
  return (
    <AppBarContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            WolfPack Helper
          </Typography>
        </Toolbar>
      </AppBar>
    </AppBarContainer>
  );
}
