import React, { Component } from "react";
import { BannerContainer } from "./style";
import ristekLogo from "../../assets/logo-ristek-2.svg";
import conquerimg from "../../assets/conquertech.svg";
import bentuk from "../../assets/bentuk2 lucu.svg";

class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <div className="middle-content">
          <img className="ristek-logo" src={ristekLogo} alt="logo ristek" />
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
          <div className="bentuk-wrap">
            <img className="bentuk" src={bentuk} alt="bentuk lucu" />
          </div>
        </div>
      </BannerContainer>
    );
  }
}

export default Banner;