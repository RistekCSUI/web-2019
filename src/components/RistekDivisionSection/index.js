import React from "react";
import { DivisionSectionContainer } from "./style";

import Card from "../Card";

import hrLogo from "../../assets/HR.png";
import pmLogo from "../../assets/PM.png";
import prLogo from "../../assets/PR.png";

class RistekDivisionSection extends React.Component {
  render() {
    return (
      <DivisionSectionContainer>
        <div className="title-container">
          <h1 className="title">The Divisions of Ristek</h1>
          <p className="subtitle-row-1">
            Ristek Fasilkom UI 2019 consists of 3 divisions and 8 Special
            Interest
          </p>
          <p className="subtitle-row-2">
            Groups (SIGs) which are divided into two groups.
          </p>
        </div>
        <div className="pi-cardlist-container">
          <div className="card-container">
            <Card>
              <div className="card-content-container">
                <img className="division-logo" src={hrLogo} alt="logo HR" />
                <p className="division-name">Human Resources Division</p>
              </div>
            </Card>
          </div>
          <div className="card-container">
            <Card>
              <div className="card-content-container">
                <img className="division-logo" src={pmLogo} alt="logo PM" />
                <p className="division-name">Project Management Division</p>
              </div>
            </Card>
          </div>
          <div className="card-container">
            <Card>
              <div className="card-content-container">
                <img className="division-logo" src={prLogo} alt="logo PR" />
                <p className="division-name">Public Relation Division</p>
              </div>
            </Card>
          </div>
        </div>
        <div className="bph-cardlist-container">
          <div className="group-card-container">
            <Card>
              <div className="group-card-content">
                <p className="group-card-title">
                  Computer Science & Computational Intelligence Group:
                </p>
                <div className="group-list">
                  <p>- Competitive Programming SIG</p>
                  <p>- Data Science SIG</p>
                  <p>- Embedded Systems SIG</p>
                  <p>- Network Security & Operating Systems SIG</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="group-card-container">
            <Card>
              <div className="group-card-content">
                <p className="group-card-title">Development Group:</p>
                <div className="group-list">
                  <p>- Digital Product Design SIG</p>
                  <p>- Game Development SIG</p>
                  <p>- Mobile Development SIG</p>
                  <p>- Web Development SIG</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DivisionSectionContainer>
    );
  }
}

export default RistekDivisionSection;
