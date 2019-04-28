import React from "react";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";
import TextField from "@material-ui/core/TextField";

class ShipDetails extends React.Component {
  setPropValue = name => event => {
    let value = event.target.value;
    this.props.setShipDetail(name, value);
  };

  render() {
    let { mastHeight, length, weight } = this.props.shipDetails;
    return (
      <Container>
        <Typography variant="h6">Features</Typography>
        <PaddedTextField
          id="mast-height"
          label="Mast Height"
          type="number"
          value={mastHeight}
          onChange={this.setPropValue("mastHeight")}
          autoComplete="off"
        />
        <PaddedTextField
          id="length"
          label="Length"
          type="number"
          value={length}
          onChange={this.setPropValue("length")}
          autoComplete="off"
        />
        <PaddedTextField
          id="weight"
          label="Weight"
          type="number"
          value={weight}
          onChange={this.setPropValue("weight")}
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
