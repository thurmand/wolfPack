import React from "react";
import { createComponentWithProxy } from "react-fela";
import RangeCalculator from "../range-calculator";
import ShipCard from "../ship-card";
import ShipDetails from "../ship-details";
import { ButtonBase, Paper, Typography, Divider } from "@material-ui/core";

class ShipList extends React.Component {
  state = {
    isFindShipDialogOpen: false,
    ships: [
      {
        details: {
          mastHeight: "",
          length: "",
          weight: ""
        },
        range: {
          isZoomed: false,
          mastHeight: "",
          centiradians: "",
          hectoMeters: 3
        }
      }
    ]
  };

  getNewShip = () => {
    return {
      details: {
        mastHeight: "",
        length: "",
        weight: ""
      },
      range: {
        isZoomed: false,
        mastHeight: "",
        centiradians: "",
        hectoMeters: 3
      }
    };
  };

  addShip = () => {
    let currentShipList = this.state.ships;
    currentShipList.push(this.getNewShip());
    this.setState({ ships: currentShipList });
  };

  setShipRange = (key, value, property) => {
    let currentShips = this.state.ships;
    currentShips[key].range[property] = value;
    this.setState({ ships: currentShips });
  };

  setShipDetails = (key, value, property) => {
    let currentShips = this.state.ships;
    currentShips[key].details[property] = value;
    this.setState({ ships: currentShips });
  };

  render() {
    return (
      <>
        {this.state.ships.map((ship, i) => (
          <ShipCard
            key={i}
            removeShip={() => {
              let currentShips = this.state.ships;
              currentShips.splice(i, 1);
              this.setState({ ships: currentShips });
            }}
            showFindShipDialog={() => {
              this.setState({ isFindShipDialogOpen: true });
            }}
          >
            <ShipDetails
              shipDetails={ship.details}
              setShipDetail={(name, value) => {
                this.setShipDetails(i, value, name);
              }}
            />
            <PaddedDivider />
            <RangeCalculator
              rangeDetails={ship.range}
              mastHeight={ship.details.mastHeight}
              getCentiradians={value => {
                this.setShipRange(i, value, "centiradians");
              }}
              handleZoomSwitch={value => {
                this.setShipRange(i, value, "isZoomed");
              }}
              getHectoMeters={value => {
                this.setShipRange(i, value, "hectoMeters");
              }}
              resetShipRange={() => {
                let currentShips = this.state.ships;
                currentShips[i].range = this.getNewShip();
                this.setState({ ships: currentShips });
              }}
            />
          </ShipCard>
        ))}
        <FullWidthPaper>
          <FullWidthButtonBase focusRipple onClick={this.addShip}>
            <Typography variant="button">Add Ship</Typography>
          </FullWidthButtonBase>
        </FullWidthPaper>
      </>
    );
  }
}

const FullWidthPaper = createComponentWithProxy(
  ({ theme }) => ({
    background: theme.primary[100],
    marginBottom: "8px"
  }),
  Paper
);

const FullWidthButtonBase = createComponentWithProxy(
  () => ({
    width: "100%",
    padding: "12px"
  }),
  ButtonBase
);

const PaddedDivider = createComponentWithProxy(
  () => ({
    marginTop: "4px",
    marginBottom: "4px"
  }),
  Divider
);

export default ShipList;
