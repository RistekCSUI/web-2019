import React, { Component } from "react";
import { FooterContainer } from "./style";
import ConquerTechLogo from "../../assets/conquertech.svg";
import WhiteLogoset from "../../assets/logoset-putih.svg";
import TwitterLogo from "../../assets/twitter.svg";
import FacebookLogo from "../../assets/facebook.svg";
import LineLogo from "../../assets/line.svg";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="footer-container">
          <div className="padding-container" id="contact">
            <div className="upper">
              <div className="contact">
                <h1>Contact us at</h1>
                <h2>ristekfasilkomui@gmail.com</h2>
              </div>
              <div className="social-media">
                <h2>Or find us through social media</h2>
                <div className="media-list">
                  <div>
                    <img className="social-icon" src={LineLogo} />
                    <p>@ristekfasilkomui</p>
                  </div>
                  <div>
                    <img className="social-icon" src={TwitterLogo} />
                    <p>@RistekCSUI</p>
                  </div>
                  <div>
                    <img className="social-icon" src={FacebookLogo} />
                    <p>Ristek Fasilkom UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower">
              <div className="conquer-text">
                <img className="conquerlogo" src={ConquerTechLogo} />
              </div>
              <div className="web-text">
                <div>
                  <p>ristek.cs.ui.ac.id</p>
                  <p>fb.me/RistekCSUI</p>
                </div>
                <img className="white-logoset" src={WhiteLogoset} />
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
