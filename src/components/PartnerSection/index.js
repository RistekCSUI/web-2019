/* eslint-disable react/prop-types */
import React from "react";
import { PartnerSectionContainer } from "./style";

import GojekLogo from "../../assets/gojek-logo.png";
import GoAcademy from "../../assets/go-academy.png";

class PartnerSection extends React.Component {
  onClickGojekDetail = () => window.open("https://www.go-jek.com/", "_blank");

  onClickAcademyDetail = () =>
    window.open("https://www.go-jek.com/go-academy/", "_blank");

  render() {
    return (
      <PartnerSectionContainer>
        <div className="section-container" id={this.props.id}>
          <div className="title">
            <h1>About Our Partner</h1>
          </div>
          <div className="description">
            <div className="desc-container">
              <div className="upper-desc-container">
                <img className="gojek-logo" src={GojekLogo} />
                <p className="text-desc">
                  GOJEK is the largest on-demand service provider that provides
                  a variety of complete services starting from transportation,
                  logistics, payment, food delivery, and other on-demand
                  services, by connecting users to more than 1 million driver
                  partners, more than 200.000 food vendors, and more than 30.000
                  other service providers.
                </p>
              </div>
              <div
                className="detail-btn"
                onClick={() => this.onClickGojekDetail()}
              >
                <p>More detail</p>
              </div>
            </div>
            <div className="desc-container">
              <div className="upper-desc-container">
                <img className="academy-logo" src={GoAcademy} />
                <p className="text-desc">
                  This year, Ristek has partnered up with GO-ACADEMY,
                  Indonesia’s leading talent incubator to nurture the interest
                  and innovation in technology of Fasilkom UI’s students. With
                  this partnership, Ristek wishes to unleash the limitless
                  potential for invention that exists in each and every one of
                  Fasilkom UI’s students.
                </p>
              </div>
              <div
                className="detail-btn"
                onClick={() => this.onClickAcademyDetail()}
              >
                <p>More detail</p>
              </div>
            </div>
          </div>
        </div>
      </PartnerSectionContainer>
    );
  }
}

export default PartnerSection;
