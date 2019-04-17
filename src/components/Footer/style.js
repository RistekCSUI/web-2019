import styled from "styled-components";

export const FooterContainer = styled.div`
  color: ${props => props.theme.colors.white};
  .footer-container {
    width: 100%;
    background: #000000;
    position: absolute;
  }

  .padding-container {
    padding: 3.5rem 3rem 1rem 3rem;
  }

  .upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contact h1 {
    font-size: 64px;
  }

  .contact h2 {
    color: ${props => props.theme.colors.lightBlue};
    margin-top: 1rem;
    font-size: 36px;
  }

  .social-media {
    margin-top: 1.5rem;
    margin-right: 5rem;
  }

  .social-media h2 {
    font-size: 36px;
  }

  .media-list div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
  }

  .media-list p {
    margin-left: 1.2rem;
  }

  .lower {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
  }

  .conquerlogo {
    width: 10rem;
  }

  .web-text {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .web-text div {
    text-align: right;
  }

  .white-logoset {
    margin-left: 1.5rem;
    width: 8rem;
  }

  @media (max-width: 1360px) {
    .social-media {
      margin-right: 0rem;
    }

    .contact h1 {
      font-size: 56px;
    }

    .contact h2 {
      font-size: 28px;
    }

    .social-media h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 1280px) {
    .padding-container {
      padding: 3rem 2rem 1rem 2rem;
    }
  }

  @media (max-width: 1024px) {
    .contact h1 {
      font-size: 48px;
    }

    .contact h2 {
      font-size: 24px;
    }

    .social-media h2 {
      font-size: 24px;
    }

    .conquerlogo {
      width: 8rem;
    }

    .white-logoset {
      width: 6rem;
    }

    .media-list,
    .web-text p {
      font-size: 14px;
    }

    .media-list img {
      width: 2rem;
    }
  }

  @media (max-width: 768px) {
    .padding-container {
      padding: 2rem 1rem 1rem 1rem;
    }
  }

  @media (max-width: 650px) {
    .upper {
      flex-direction: column;
    }

    .contact {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 450px) {
    .upper {
      flex-direction: column;
    }

    .contact {
      margin-bottom: 1rem;
    }

    .web-text p {
      display: none;
    }

    .contact h1 {
      font-size: 40px;
    }

    .contact h2 {
      font-size: 20px;
    }

    .social-media h2 {
      font-size: 22px;
    }

    .conquerlogo {
      width: 7rem;
    }

    .white-logoset {
      width: 5rem;
    }

    .media-list img {
      width: 1.5rem;
    }
  }
`;
