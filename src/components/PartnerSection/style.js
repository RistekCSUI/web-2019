import styled from "styled-components";

export const PartnerSectionContainer = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    color: white;
    margin: 0;
  }

  .section-container {
    padding: 4rem 1rem 10rem 1rem;
  }

  .title {
    text-align: center;
  }

  .title h1 {
    font-weight: bold;
    font-size: 50px;
    color: ${props => props.theme.colors.black};
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .desc-container {
    background: ${props => props.theme.colors.white};
    padding: 3rem 2rem 4rem 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .upper-desc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upper-desc-container p {
    color: ${props => props.theme.colors.black};
  }

  p,
  a {
    font-size: 22px;
    line-height: 2.2rem;
  }

  .text-desc {
    text-align: justify;
  }

  .gojek-logo {
    width: 24rem;
    margin-bottom: 1rem;
  }

  .academy-logo {
    width: 34rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .detail-btn {
    background: ${props => props.theme.colors.black};
    color: #f9f9f9;
    width: 7.5rem;
    text-align: center;
    padding: 0.75rem 3rem 0.75rem 3rem;
    font-size: 24px;
    margin-top: 2rem;
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    .gojek-logo {
      width: 21.5rem;
    }

    .academy-logo {
      width: 31rem;
    }
  }

  @media (max-width: 1360px) {
    .section-container {
      padding-top: 3rem;
    }
    .gojek-logo {
      width: 21rem;
    }

    .academy-logo {
      width: 30rem;
    }

    p,
    a {
      font-size: 20px;
      line-height: 2rem;
    }

    .detail-btn {
      padding: 0.5rem 2.5rem;
    }
  }

  @media (max-width: 1280px) {
    .gojek-logo {
      width: 19.5rem;
    }

    .academy-logo {
      width: 28rem;
    }

    p,
    a {
      font-size: 18px;
    }

    .detail-btn {
      padding: 0.5rem 2.3rem 0.5rem 2.3rem;
    }
  }

  @media (max-width: 1150px) {
    .section-container {
      padding-top: 2rem;
    }
    .title h1 {
      font-size: 40px;
    }
    .gojek-logo {
      width: 18.3rem;
    }

    .academy-logo {
      margin-top: 0.8rem;
      width: 26rem;
    }

    p,
    a {
      font-size: 18px;
    }

    .desc-container {
      padding: 3rem 1rem 4rem 1rem;
    }
  }

  @media (max-width: 980px) {
    .section-container {
      padding: 3rem 2rem 10rem 2rem;
    }

    .description {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 1.5rem;
    }

    .desc-container {
      padding: 3rem 2rem 4rem 2rem;
      margin: 1rem 0;
    }

    .gojek-logo {
      width: 18rem;
    }

    .academy-logo {
      width: 28rem;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    p,
    a {
      font-size: 18px;
    }

    .detail-btn {
      width: 8rem;
      padding: 0.4rem 2rem;

      a {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    .desc-container {
      padding: 3rem 2rem 4rem 2rem;
    }

    .gojek-logo {
      width: 15rem;
    }

    .academy-logo {
      width: 23rem;
    }

    p {
      font-size: 18px;
      line-height: 1.8rem;
    }

    .detail-btn {
      width: 8rem;
      padding: 0.4rem 1.5rem 0.4rem 1.5rem;

      a {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 520px) {
    .title h1 {
      font-size: 38px;
    }

    .section-container {
      padding: 2rem 1rem 6rem 1rem;
    }
    .desc-container {
      padding: 2rem 1.2rem 3rem 1.2rem;
    }

    .gojek-logo {
      width: 12rem;
    }

    .academy-logo {
      width: 18rem;
      margin-bottom: 1.2rem;
    }

    p,
    a {
      font-size: 16px;
      line-height: 1.6rem;
    }

    .detail-btn {
      width: 6rem;
      padding: 0.3rem 1.5rem 0.3rem 1.5rem;
    }
  }

  @media (max-width: 350px) {
    .desc-container {
      padding: 2rem 1rem 3rem 1rem;
    }

    .gojek-logo {
      width: 11rem;
    }

    .academy-logo {
      width: 15rem;
    }

    p {
      font-size: 15px;
      line-height: 1.6rem;
    }

    .detail-btn {
      width: 6rem;
      padding: 0.3rem 1.5rem 0.3rem 1.5rem;
    }
  }
`;
