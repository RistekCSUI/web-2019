import React, { Component } from "react";
import { HeaderContainer } from "./style";
import { Link, animateScroll as scroll } from "react-scroll";
import RistekLogoSet from "../../assets/logoset-ristek.svg";
import BurgerLogo from "../../assets/burger.svg";
import MobileRistekLogo from "../../assets/logo-ristek-mobile.svg";
import CloseIcon from "../../assets/close.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedMobile: false
    };
  }

  renderBurgerNavButton = () => (
    <div className="burger-container">
      <img
        className="burger-icon"
        src={BurgerLogo}
        onClick={() => this.toggleExpandMobile()}
      />
    </div>
  );

  toggleExpandMobile() {
    const { isExpandedMobile } = this.state;
    this.setState({ isExpandedMobile: !isExpandedMobile });
  }

  closeNavMobile = () => {
    this.setState({ isExpandedMobile: false });
  }

  renderMenuMobile = () => {
    const isMobileMenuOpened = this.state.isExpandedMobile
      ? "mobile-menu-container"
      : "hide";

    return (
      <div className={isMobileMenuOpened}>
        <div className="upper-burger">
          <img className="ristek-logo-mobile" src={MobileRistekLogo} />
          <img
            className="burger-icon"
            src={CloseIcon}
            onClick={() => this.toggleExpandMobile()}
          />
        </div>

        <div className="burger-title">
          <h1>MAIN MENU</h1>
        </div>

        <div className="burger-menus">
          <Link
            activeClass="active"
            to="root"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <div className="menu" onClick={() => this.closeNavMobile()}>
              <h3>Home</h3>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <div className="menu" onClick={() => this.closeNavMobile()}>
              <h3>About</h3>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="partner"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <div className="menu" onClick={() => this.closeNavMobile()}>
              <h3>Partner</h3>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="activities"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <div className="menu" onClick={() => this.closeNavMobile()}>
              <h3>Activities</h3>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            <div className="menu" onClick={() => this.closeNavMobile()}>
              <h3>Contact</h3>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <HeaderContainer>
        {this.renderMenuMobile()}
        <div className="header-container">
          <div className="header-logo">
            <img
              className="ristek-logo-img"
              src={RistekLogoSet}
              alt="ristek-logo"
            />
            <div className="header-menu">
              <Link
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <div>
                  <p>Home</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <div>
                  <p>About</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="partner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <div>
                  <p>Partner</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="activities"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <div>
                  <p>Activities</p>
                </div>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                <div>
                  <p>Contact</p>
                </div>
              </Link>
            </div>
            {this.renderBurgerNavButton()}
          </div>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
