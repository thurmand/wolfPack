import React from "react";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";

class FindShip extends React.Component {
  // TODO put in library and derive object from it
  state = {
    profile: [null],
    maxProfileCount: 5,
    features: ["M", "F", "K"]
  };

  handleChange = (event, i) => {
    let profile = this.state.profile;
    profile[i] = event.target.value;
    if (profile[profile.length - 1] != null && profile.length < 5) {
      profile.push(null);
    }

    this.setState({ profile: profile }, () => {
      console.log(this.state.profile);
    });
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle>Quick Search</DialogTitle>
        <DialogContent>
          <HorizontalForm>
            {this.state.profile.map((position, i) => (
              <RadioGroup
                value={this.state.value}
                onChange={() => {
                  this.handleChange(event, i);
                }}
                key={i}
              >
                {this.state.features.map((n, j) => (
                  <FormControlLabel
                    key={j}
                    value={n}
                    control={
                      <Radio
                        color="primary"
                        checked={n === this.state.profile[i]}
                      />
                    }
                    label={n}
                  />
                ))}
              </RadioGroup>
            ))}
          </HorizontalForm>
        </DialogContent>
      </Dialog>
    );
  }
}

const HorizontalForm = createComponentWithProxy(
  () => ({
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row"
  }),
  FormControl
);

export default FindShip;
