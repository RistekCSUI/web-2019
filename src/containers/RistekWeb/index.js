import React, { Component } from "react";
import MainInfo from "../../components/MainInfo";
import MainValues from "../../components/MainValues";
import Achievement from "../../components/Achievement";

class RistekWeb extends Component {
  render() {
    return (
      <React.Fragment>
        <MainInfo />
        <MainValues />
        <Achievement />
      </React.Fragment>
    );
  }
}

export default RistekWeb;
