import React, { Component } from "react";
import { AchievementContainer } from "./style";
import { COMPETITIONS } from "./data_competitions";
import { INTERNS } from "./data_interns";
import AchievementBox from "../AchievementBox";

class Achievement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AchievementContainer>
        <div className="main">
          <div className="upper-title">
            <h2>Ristek’s Achievements</h2>
          </div>

          <div className="main-body">
            <div className="lower-title">
              <p>
                Throughout the years, our members have proven their prowess in
                the field of technology by winning some of the most prestigious
                national and international competitions. A few of those
                competitions include:
              </p>
            </div>
            <div className="content">
              {COMPETITIONS.map(res => (
                <AchievementBox data={res} />
              ))}
            </div>
          </div>

          <div className="main-body">
            <div className="lower-title">
              <p>
                Our past members have also been hired to intern at excellent
                companies all over the world, some of them including:
              </p>
            </div>
            <div className="content">
              {INTERNS.map(res => (
                <AchievementBox data={res} />
              ))}
            </div>
          </div>
        </div>
      </AchievementContainer>
    );
  }
}

export default Achievement;