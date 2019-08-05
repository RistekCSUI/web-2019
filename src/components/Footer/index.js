/* eslint-disable react/jsx-no-target-blank */
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
                <a href="mailto:ristek.ui@gmail.com" target="_blank">
                  ristek.ui@gmail.com
                </a>
              </div>
              <div className="social-media">
                <h2>Or find us through social media</h2>
                <div className="media-list">
                  <div>
                    <img className="social-icon" src={LineLogo} />
                    <a>@ristekfasilkomui</a>
                  </div>
                  <div
                    className="clickable"
                    onClick={() =>
                      window.open("https://twitter.com/ristekcsui")
                    }
                  >
                    <img className="social-icon" src={TwitterLogo} />
                    <a href="https://twitter.com/ristekcsui" target="_blank">
                      @RistekCSUI
                    </a>
                  </div>
                  <div
                    className="clickable"
                    onClick={() => window.open("https://fb.me/RistekCSUI")}
                  >
                    <img className="social-icon" src={FacebookLogo} />
                    <a href="https://fb.me/RistekCSUI" target="_blank">
                      Ristek Fasilkom UI
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lower">
              <div className="conquer-text">
                <img className="conquerlogo" src={ConquerTechLogo} />
              </div>
              <div className="web-text">
                <div className="link-container">
                  <a href="https://ristek.cs.ui.ac.id" target="_blank">
                    ristek.cs.ui.ac.id
                  </a>
                  <a href="https://fb.me/RistekCSUI" target="_blank">
                    fb.me/RistekCSUI
                  </a>
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
