import React, { Component } from "react";
import MainInfo from "../../components/MainInfo";
import MainValues from "../../components/MainValues";
import Achievement from "../../components/Achievement";
import Banner from "../../components/Banner";
import RistekDivisionSection from "../../components/RistekDivisionSection";

class RistekWeb extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <MainInfo />
        <MainValues />
        <RistekDivisionSection />
        <Achievement />
      </React.Fragment>
    );
  }
}

export default RistekWeb;
