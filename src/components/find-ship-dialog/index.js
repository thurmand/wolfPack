import React from "react";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, ButtonBase, TextField, IconButton } from "@material-ui/core";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

class FindShip extends React.Component {
  // TODO put in library and derive object from it
  state = {
    profile: "",
    maxProfileCount: 5,
    features: ["M", "F", "K"]
  };

  filterInput = event => {
    let value = event.target.value.toUpperCase();
    let isBadChar = [...value].some(
      char => char !== "M" && char !== "F" && char !== "K"
    );
    if (!isBadChar) {
      this.setProfile(value, this.state);
    }
  };

  addToProfile = (value, state) => {
    let profile = state.profile;
    profile += value;
    if (profile.length < state.maxProfileCount) {
      this.setState({ profile: profile });
    }
  };

  setProfile = (value, state) => {
    if (state.profile.length < state.maxProfileCount) {
      this.setState({ profile: value });
    }
  };

  popProfile = () => {
    let profile = this.state.profile;
    this.setState({ profile: profile.slice(0, -1) });
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle>Find Ship</DialogTitle>
        <DialogContent>
          <TextField
            value={this.state.profile}
            onChange={this.filterInput}
            autoFocus={true}
          />
          <br />
          <ButtonContainer>
            {this.state.features.map((feature, i) => (
              <ButtonStyle
                key={i}
                variant="contained"
                color="primary"
                onClick={() => {
                  this.addToProfile(feature, this.state);
                }}
              >
                {feature}
              </ButtonStyle>
            ))}
            <IconButton onClick={this.popProfile}>
              <KeyboardBackspace />
            </IconButton>
          </ButtonContainer>
        </DialogContent>
      </Dialog>
    );
  }
}

const ButtonStyle = createComponentWithProxy(
  () => ({
    padding: "2px, 4px "
  }),
  Button
);

const ButtonContainer = createComponentWithProxy(() => ({
  paddingTop: "8px",
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "space-around"
}));

export default FindShip;
