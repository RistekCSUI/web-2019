import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: white;
  width: 100%;

  ${'' /* -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1); */}

  .header-container {
    padding: 1rem 1rem 1rem 2rem;
  }

  .header-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-menu {
    display: flex;
    flex-direction: row;
  }

  .header-menu div {
    padding: 0 2rem 0 2rem;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: black;
    transition: 0.5s;
  }

  .header-menu div:hover {
    color: #308077;
  }

  .ristek-logo-img {
    width: 13rem;
  }

  .sticky {
    position: fixed;
  }

  .burger-container {
    display: none;
  }

  .burger-icon {
    width: 2rem;
  }

  .mobile-menu-container {
    width: 95vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 2;
    display: none;
    flex-direction: column;
    background-color: #589f97;
    padding: 1rem;
  }

  .burger-menus {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    color: white;
    display: none;
  }

  .ristek-logo-mobile {
    width: 10rem;
  }

  .burger-menus div {
    border-bottom: 0.5px solid white;
    padding-left: 1rem;
    height: 3rem;
  }

  .upper-burger {
    display: flex;
    justify-content: space-between;
  }

  .hide {
    display: none;
  }

  @media (max-width: 1360px) {
    .header-container {
      padding: 1rem 1rem 1rem 2rem;
    }

    .header-menu div {
      padding: 0 1.5rem 0 1.5rem;
    }
  }

  @media (max-width: 1080px) {
    .header-container {
      padding: 1rem 1rem 1rem 2rem;
    }

    .header-menu div {
      padding: 0 1rem 0 1rem;
    }
  }

  @media (max-width: 768px) {
    .header-container {
      padding: 1rem 0rem 1rem 1rem;
    }

    .header-menu div {
      padding: 0 0.8rem 0 0.8rem;
    }

    .ristek-logo-img {
      width: 11rem;
    }

    .header-menu div {
      font-size: 15px;
    }
  }

  @media (max-width: 650px) {
    .header-menu div {
      display: none;
    }

    .burger-container {
      display: block;
    }

    .burger-container img {
      width: 2rem;
    }

    .header-container {
      padding: 1rem 1rem 1rem 1rem;
    }

    .ristek-logo-img {
      width: 10rem;
    }

    .mobile-menu-container {
      display: flex;
    }

    .menu {
      margin-bottom: 2rem;
    }

    .burger-menus {
      display: block;
    }

    .burger-title {
      margin: 3rem 0 3rem 0;
      color: white;
      display: block;
    }

    .burger-title h1 {
      font-weight: 1000;
    }
  }

  @media (max-width: 430px) {
    .mobile-menu-container {
      width: 93vw;
    }
  }

  @media (max-width: 360px) {
    .mobile-menu-container {
      width: 91vw;
    }
  }
`;
