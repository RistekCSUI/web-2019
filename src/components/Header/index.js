import React, { Component } from "react";
import { HeaderContainer } from "./style";
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

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
  };

  componentDidMount() {
    const el = document.querySelector(".header-container");
    this.setState({
      top: el.offsetTop,
      height: el.offsetHeight
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  // componentDidUpdate() {
  //   if (this.state.scroll > this.state.top) {
  //     document.body.style.paddingTop = `${this.state.height}px`;
  //   } else {
  //     document.body.style.paddingTop = 0;
  //   }
  // }

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
          <div className="menu">
            <h3>Home</h3>
          </div>
          <div className="menu">
            <h3>About</h3>
          </div>
          <div className="menu">
            <h3>Partners</h3>
          </div>
          <div className="menu">
            <h3>Activities</h3>
          </div>
          <div className="menu">
            <h3>Contact</h3>
          </div>
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
              <div>
                <p>Home</p>
              </div>
              <div>
                <p>About</p>
              </div>
              <div>
                <p>Partners</p>
              </div>
              <div>
                <p>Activities</p>
              </div>
              <div>
                <p>Contact</p>
              </div>
            </div>
            {this.renderBurgerNavButton()}
          </div>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
