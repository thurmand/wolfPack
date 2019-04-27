import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import DirectionsBoat from "@material-ui/icons/DirectionsBoat";
import { createComponentWithProxy } from "react-fela";
import TextField from "@material-ui/core/TextField";
import FindShip from "../find-ship-dialog";

function CardHeaderActions({ removeShip, showFindShipDialog }) {
  return (
    <>
      <IconButton onClick={showFindShipDialog}>
        <DirectionsBoat />
      </IconButton>
      <IconButton onClick={removeShip}>
        <Delete />
      </IconButton>
    </>
  );
}

class ShipCard extends React.Component {
  state = { isFindShipDialogOpen: false };

  importAll = r => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  showFindShipDialog = () => {
    this.setState({ isFindShipDialogOpen: !this.state.isFindShipDialogOpen });
  };

  render() {
    // let images = this.importAll(
    //   require.context("../../images/", false, /\.(jpg|PNG)$/)
    // );
    let image = "Heavy_Freighter_Type_1-2_1.jpg";
    // console.log(images);
    return (
      <>
        <FindShip
          open={this.state.isFindShipDialogOpen}
          onClose={this.showFindShipDialog}
        />
        <PaddedCard>
          <CardHeader
            title={<TextField label="Ship Name" autoComplete="off" />}
            action={CardHeaderActions({
              removeShip: this.props.removeShip,
              showFindShipDialog: this.showFindShipDialog
            })}
          />
          {/* <CardMediaHeight image={require(`../../images/${[image]}`)} /> */}
          <CardContent>{this.props.children}</CardContent>
          <CardActions>
            {/* <IconButton>
            <DirectionsBoat />
          </IconButton> */}
          </CardActions>
        </PaddedCard>
      </>
    );
  }
}

const CardMediaHeight = createComponentWithProxy(
  () => ({
    height: "0px"
  }),
  CardMedia
);

const PaddedCard = createComponentWithProxy(
  () => ({
    marginBottom: "8px"
  }),
  Card
);

export default ShipCard;
