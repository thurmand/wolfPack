import React from "react";
import { createComponentWithProxy } from "react-fela";
import RangeCalculator from "../components/range-calculator";
import ShipList from "../components/ship-list";
import ShipCard from "../components/ship-card";
import Button from "@material-ui/core/Button";

class AppBody extends React.Component {
  render() {
    return (
      <Container>
        <ShipList />
      </Container>
    );
  }
}

const Container = createComponentWithProxy(() => ({
  height: "100%",
  width: "100%"
}));

export default AppBody;
