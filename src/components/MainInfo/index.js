/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { MainInfoContainer } from "./style";
import MissionImg from "../../assets/mission.jpg";
import VisionImg from "../../assets/vision.jpg";
import RistekLogo from "../../assets/ristek-logo-main.svg";
import visionThumb from "../../assets/vision-thumb.jpg";
import misionThumb from "../../assets/mission-thumb.jpg";
import RistekThumb from "../../assets/ristek-logo-main-thumb.png";

import ProgressiveImage from "../ProgressiveImage";

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
        <div className="container" id={this.props.id}>
          <div className="rowFirst">
            <div className="ristekLogo">
              <ProgressiveImage
                cName="ristekImg"
                preview={RistekThumb}
                image={RistekLogo}
                alt="Ristek Conquer Tech"
              />
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
              <ProgressiveImage
                cName="visionImg"
                preview={visionThumb}
                image={VisionImg}
                alt="vision image"
              />
            </div>
          </div>
          <div className="rowVisionMobile">
            <div className="visionPict">
              <ProgressiveImage
                cName="visionImg"
                preview={visionThumb}
                image={VisionImg}
                alt="vision image"
              />
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
              <ProgressiveImage
                cName="missionImg"
                preview={misionThumb}
                image={MissionImg}
                alt="mission image"
              />
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
