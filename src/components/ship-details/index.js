import React from "react";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ShipDetails extends React.Component {
  getMastHeight = name => event => {
    let value = event.target.value;
    if (!isNaN(value)) {
      this.props.setShipDetail(name, value);
    }
  };

  render() {
    let { mastHeight, length } = this.props.shipDetails;
    return (
      <Container>
        <Typography variant="h6">Ship Details</Typography>
        <PaddedTextField
          id="mast-height"
          label="Mast Height"
          margin="normal"
          value={mastHeight}
          onChange={this.getMastHeight("mastHeight")}
          autoComplete="off"
        />
        <PaddedTextField
          id="length"
          label="Length"
          margin="normal"
          value={length}
          onChange={this.getMastHeight("length")}
          autoComplete="off"
        />
      </Container>
    );
  }
}

const PaddedTextField = createComponentWithProxy(
  () => ({
    margin: "4px"
  }),
  TextField
);

const Container = createComponentWithProxy(() => ({
  height: "100%"
}));

export default ShipDetails;
