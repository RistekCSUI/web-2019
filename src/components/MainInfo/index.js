import React, { Component } from "react";
import { MainInfoContainer } from "./style";
import MissionImg from "../../assets/mission.svg";
import VisionImg from "../../assets/vision.svg";
import RistekLogo from "../../assets/ristek-logo-main.svg";

const WHAT_IS_RISTEK =
  "RISTEK is an independent organization in Faculty of Computer Science, University of Indonesia that aims to foster students' interests and talent in technology.";

const VISION = (
  <p>
    Building Ristek Fasilkom UI 2019 as an organization to develop students’
    interests in technology to{" "}
    <b>produce competent, helpful, competent, and distinguished human </b>{" "}
    resources.
  </p>
);

const MISSION_ONE = (
  <p>
    <b>Appreciate and cultivate</b> the interests as well as ability of Fasilkom
    UI students in technology.
  </p>
);

const MISSION_TWO = (
  <p>
    Build a <b>collaborative and competitive</b> environment for IT development.
  </p>
);

const MISSION_THREE = (
  <p>
    Improve the productivity output of Fasilkom UI, particularly the production
    of <b>innovative, impactful technology.</b>
  </p>
);
class MainInfo extends Component {
  render() {
    return (
      <MainInfoContainer>
        <div className="container">
          <div className="rowFirst">
            <div className="ristekLogo">
              <img className="ristekImg" src={RistekLogo} />
            </div>
            <div className="descContainer">
              <div className="descStyle">
                <div>
                  <h1>What is Ristek</h1>
                  <p>{WHAT_IS_RISTEK}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rowVision">
            <div className="descContainer">
              <div className="descStyle">
                <div>
                  <h1>Vision</h1>
                  {VISION}
                </div>
              </div>
            </div>
            <div className="visionPict">
              <img className="visionImg" src={VisionImg} />
            </div>
          </div>
          <div className="rowVisionMobile">
            <div className="visionPict">
              <img className="visionImg" src={VisionImg} />
            </div>
            <div className="descContainer">
              <div className="descStyle">
                <div>
                  <h1>Vision</h1>
                  {VISION}
                </div>
              </div>
            </div>
          </div>
          <div className="rowMission">
            <div className="missionPict">
              <img className="missionImg" src={MissionImg} />
            </div>
            <div className="descContainer">
              <div className="descStyle">
                <div>
                  <h1>Mission</h1>
                  <div>
                    <div className="missionRow">
                      <div className="missionNumber">
                        <p>1.</p>
                      </div>
                      <div>{MISSION_ONE}</div>
                    </div>
                    <div className="missionRow">
                      <div className="missionNumber">
                        <p>2.</p>
                      </div>
                      <div>{MISSION_TWO}</div>
                    </div>
                    <div className="missionRow">
                      <div className="missionNumber">
                        <p>3.</p>
                      </div>
                      <div>{MISSION_THREE}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainInfoContainer>
    );
  }
}

export default MainInfo;
