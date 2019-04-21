import React, { Component } from "react";
import { MainValuesContainer } from "./style";
import MainValueOne from "../../assets/main-value-1.png";
import MainValueTwo from "../../assets/main-value-2.png";
import MainValueThree from "../../assets/main-value-3.png";

const VALUE_ONE = (
  <>
    <p>
      We prioritize <b>effective and relevant</b>
    </p>
    <p>
      <b>learning</b> for the students of Fasilkom
    </p>
    <p>UI, especially the members of</p>
    <p>Ristek 2019.</p>
  </>
);

const VALUE_TWO = (
  <>
    <p>It’s imperative to us that our </p>
    <p>
      members experience an <b>increase of</b>
    </p>
    <p>
      <b>competence and expertise</b> in the
    </p>
    <p>field of Computer Science.</p>
  </>
);

const VALUE_THREE = (
  <>
    <p>We encourage our members to </p>
    <p>
      <b>collaborate and cooperate</b> in
    </p>
    <p>learning, achieving, and innovating.</p>
  </>
);

class MainValues extends Component {
  render() {
    return (
      <MainValuesContainer>
        <div className="container">
          <div className="titleSection">
            <h1>Main Values</h1>
          </div>
          <div className="imgContainer">
            <div className="valueImgDiv">
              <div className="valueDesc">
                <h2>Learning</h2>
                {VALUE_ONE}
              </div>
              <img className="valueImg" src={MainValueOne} />
            </div>
            <div className="valueImgDiv">
              <div className="valueDesc">
                <h2>Professionalism</h2>
                {VALUE_TWO}
              </div>
              <img className="valueImg" src={MainValueTwo} />
            </div>
            <div className="valueImgDiv">
              <div className="valueDesc">
                <h2>Collaborative</h2>
                {VALUE_THREE}
                <div className="padder" />
              </div>
              <img className="valueImg" src={MainValueThree} />
            </div>
          </div>
        </div>
      </MainValuesContainer>
    );
  }
}

export default MainValues;
