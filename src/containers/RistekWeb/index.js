import React, { Component } from "react";
import MainInfo from "../../components/MainInfo";
import MainValues from "../../components/MainValues";
import Achievement from "../../components/Achievement";
import Banner from "../../components/Banner";
import ActivitySection from "../../components/ActivitySection";
import RistekDivisionSection from "../../components/RistekDivisionSection";

class RistekWeb extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <MainInfo />
        <MainValues />
        <RistekDivisionSection />
        <ActivitySection />
        <Achievement />
      </React.Fragment>
    );
  }
}

export default RistekWeb;
