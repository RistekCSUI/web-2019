import styled from "styled-components";

export const FooterContainer = styled.div`
  color: ${props => props.theme.colors.white};
  .footer-container {
    width: 100%;
    background: #000000;
    position: absolute;
  }

  .padding-container {
    padding: 7.5rem 3rem 2rem 3rem;
  }

  .upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contact h1 {
    font-size: 72px;
  }

  a {
    text-decoration: none;
    color: white;
    margin: 0;
  }

  .contact a {
    font-weight: 700;
    color: ${props => props.theme.colors.lightBlue};
    margin-top: 1rem;
    font-size: 44px;
    cursor: pointer;
  }

  .social-media {
    margin-top: 1.5rem;
    margin-right: 5rem;
  }

  .social-media h2 {
    font-size: 44px;
  }

  .social-media a {
    font-size: 26px;
  }

  .media-list div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
  }
  .media-list .clickable {
    cursor: pointer;
  }

  .media-list a {
    margin-left: 1.2rem;
  }

  .lower {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10rem;
  }

  .conquerlogo {
    width: 13rem;
  }

  .web-text {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .web-text div {
    text-align: right;
  }

  .web-text a {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5rem;
  }

  .white-logoset {
    margin-left: 1.5rem;
    width: 11rem;
  }

  .link-container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 848px) {
    .media-list .clickable:hover {
      text-decoration: underline;
    }

    .web-text a:hover {
      text-decoration: underline;
    }

    .contact a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1580px) {
    .padding-container {
      padding: 6.5rem 3rem 2rem 3rem;
    }

    .lower {
      padding-top: 10rem;
    }

    .social-media {
      margin-right: 1rem;
    }

    .contact h1 {
      font-size: 72px;
    }

    .contact a {
      font-size: 36px;
    }

    .social-media h2 {
      font-size: 36px;
    }

    .web-text a {
      font-size: 18px;
    }

    .conquerlogo {
      width: 11rem;
    }

    .white-logoset {
      width: 10rem;
    }
  }

  @media (max-width: 1280px) {
    .social-media {
      margin-right: 0rem;
    }

    .padding-container {
      padding: 6.5rem 2rem 2rem 2rem;
    }
  }

  @media (max-width: 1125px) {
    .contact h1 {
      font-size: 62px;
    }

    .contact a {
      font-size: 30px;
    }

    .social-media h2 {
      font-size: 30px;
    }

    .conquerlogo {
      width: 10rem;
    }

    .white-logoset {
      width: 8rem;
    }

    .social-media a {
      font-size: 22px;
    }

    .web-text a {
      font-size: 16px;
    }

    .media-list img {
      width: 2rem;
    }
  }

  @media (max-width: 848px) {
    .padding-container {
      padding: 5rem 3rem 3rem 3rem;
    }

    .upper {
      flex-direction: column;
    }

    .lower {
      padding-top: 4rem;
    }

    .contact a {
      font-size: 42px;
    }

    .social-media h2 {
      font-size: 36px;
    }

    .white-logoset {
      margin-left: 0.5rem;
    }

    .contact,
    .social-media {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .contact {
      padding-bottom: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .contact h1 {
      font-size: 56px;
    }

    .contact a {
      font-size: 36px;
    }

    .social-media h2 {
      font-size: 36px;
    }

    .conquerlogo {
      width: 9rem;
    }

    .white-logoset {
      width: 7rem;
    }

    .social-media a {
      font-size: 20px;
    }

    .web-text a {
      font-size: 15px;
    }

    .media-list img {
      width: 2rem;
    }
  }

  @media (max-width: 500px) {
    .padding-container {
      padding: 6.5rem 2rem 2.5rem 2rem;
    }

    .contact h1 {
      font-size: 48px;
    }

    .contact a {
      font-size: 28px;
    }

    .social-media h2 {
      font-size: 28px;
    }

    .conquerlogo {
      width: 8rem;
    }

    .white-logoset {
      width: 6rem;
    }

    .web-text a {
      font-size: 12px;
    }
  }

  @media (max-width: 450px) {
    .padding-container {
      padding: 3rem 2rem 2rem 2rem;
    }

    .web-text a {
      display: none;
    }

    .contact {
      padding-bottom: 2rem;
    }

    .contact h1 {
      font-size: 40px;
    }

    .contact a {
      font-size: 22px;
      margin-top: 0.5;
    }

    .social-media h2 {
      font-size: 22px;
    }

    .social-media a {
      font-size: 18px;
    }

    .conquerlogo {
      width: 8rem;
    }

    .white-logoset {
      width: 5rem;
    }
  }
`;
