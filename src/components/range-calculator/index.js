import React from "react";
import Typography from "@material-ui/core/Typography";
import { createComponentWithProxy } from "react-fela";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class RangeCalculator extends React.Component {
  getCentiradians = event => {
    let value = event.target.value;
    if (!isNaN(value) && (value >= 0 && value <= 50)) {
      this.props.getCentiradians(value);
      this.calculateHectoMeters(this.props);
    }
  };

  handleZoomSwitch = event => {
    this.props.handleZoomSwitch(event.target.checked);
    this.calculateHectoMeters(this.props);
  };

  calculateHectoMeters = props => {
    let { isZoomed } = props.rangeDetails;
    let mastHeight = props.mastHeight;
    let centiradians = Number(props.rangeDetails.centiradians);

    if (mastHeight > 0 && centiradians > 0) {
      let zoomedMulti = isZoomed ? 4 : 1;
      let hectoMeters = ((mastHeight / centiradians) * zoomedMulti).toFixed(1);
      this.props.getHectoMeters(hectoMeters);
    }
  };

  render() {
    let {
      isZoomed,
      mastHeight,
      centiradians,
      hectoMeters
    } = this.props.rangeDetails;
    return (
      <Container>
        <Typography variant="subtitle1">Range</Typography>
        <PaddedTextField
          id="centiradians"
          label="Centiradians"
          margin="normal"
          type="number"
          value={centiradians}
          onChange={this.getCentiradians}
          autoComplete="off"
        />
        <FormControlLabel
          control={
            <Switch onChange={this.handleZoomSwitch} checked={isZoomed} />
          }
          label="Zoomed In"
        />
        <Typography variant="subtitle1">Output</Typography>
        <PaddedTextField
          variant="outlined"
          label="Hectometers"
          value={hectoMeters}
          InputProps={{
            readOnly: true
          }}
        />
        <PaddedTextField
          variant="outlined"
          label="Meters"
          value={(hectoMeters * 100).toFixed(1)}
          InputProps={{
            readOnly: true
          }}
        />
        {/* <Button
          variant="contained"
          color="primary"
          onClick={this.props.resetShipRange}
        >
          reset
        </Button> */}
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

export default RangeCalculator;
