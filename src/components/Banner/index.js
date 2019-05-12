import React, { Component } from "react";
import { BannerContainer } from "./style";
import ristekLogo from "../../assets/logo-ristek-2.svg";
import conquerimg from "../../assets/conquertech.svg";
import gojeklogo from "../../assets/gojek-white.png";
import bentuk from "../../assets/bentuk2 lucu.svg";

import ristekLogoThumb from "../../assets/logo-ristek-2-thumb.png";

import ProgressiveImage from "../ProgressiveImage";

class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <div className="middle-content">
          <ProgressiveImage
            cName="ristek-logo"
            preview={ristekLogoThumb}
            image={ristekLogo}
            alt="Ristek Logo"
          />
          <div className="ristek-caption">
            <p className="top-caption">RISET DAN TEKNOLOGI</p>
            <p className="bot-caption">FAKULTAS ILMU KOMPUTER, UI</p>
          </div>
        </div>
        <div className="bot-content">
          <div className="hashtag-wrap">
            <img
              className="hashtag"
              srcSet={`${conquerimg}`}
              alt="conquer tech"
            />
          </div>
          <div className="gojek-wrap">
            <p>Official Learning Partner</p>
            <img
              className="gojek-logo"
              srcSet={`${gojeklogo}`}
              alt="gojek logo"
            />
          </div>
          <div className="bentuk-wrap">
            <img className="bentuk" src={bentuk} alt="bentuk lucu" />
          </div>
        </div>
        <div className="bot-content-mobile">
          <div className="gojek-wrap">
            <p>Official Learning Partner</p>
            <img
              className="gojek-logo"
              srcSet={`${gojeklogo}`}
              alt="gojek logo"
            />
          </div>
          <div className="hashtag-wrap">
            <img
              className="hashtag"
              srcSet={`${conquerimg}`}
              alt="conquer tech"
            />
          </div>
        </div>
      </BannerContainer>
    );
  }
}

export default Banner;
