import styled from "styled-components";

export const PartnerSectionContainer = styled.div`
  width: 100%;

  .section-container {
    padding: 1rem 1rem 10rem 1rem;
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
    justify-content: flex-start;
  }

  .upper-desc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upper-desc-container p {
    color: ${props => props.theme.colors.black};
  }

  p {
    font-size: 24px;
    line-height: 2.2rem;
  }

  .text-desc {
    text-align: justify;
  }

  .gojek-logo {
    width: 24rem;
    margin-bottom: 2rem;
  }

  .academy-logo {
    width: 34rem;
    margin-bottom: 2rem;
  }

  .detail-btn {
    background: ${props => props.theme.colors.black};
    color: #f9f9f9;
    width: 8rem;
    text-align: center;
    padding: 0.75rem 3.5rem 0.75rem 3.5rem;
    font-size: 24px;
    margin-top: 2rem;
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    .gojek-logo {
      width: 21rem;
    }

    .academy-logo {
      width: 31rem;
    }
  }

  @media (max-width: 1360px) {
    .gojek-logo {
      width: 20rem;
    }

    .academy-logo {
      width: 30rem;
    }

    p {
      font-size: 21px;
    }
  }

  @media (max-width: 1280px) {
    .gojek-logo {
      width: 18rem;
      margin-bottom: 1.5rem;
    }

    .academy-logo {
      width: 28rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 20px;
    }

    .detail-btn {
      width: 8rem;
      padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    }
  }

  @media (max-width: 1150px) {
    .title h1 {
      font-size: 40px;
    }
    .gojek-logo {
      width: 16rem;
    }

    .academy-logo {
      width: 26rem;
    }

    p {
      font-size: 18px;
    }

    .desc-container {
      padding: 3rem 1rem 4rem 1rem;
    }
  }

  @media (max-width: 980px) {
    .section-container {
      padding: 1rem 2rem 10rem 2rem;
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
      width: 20rem;
    }

    .academy-logo {
      width: 30rem;
    }

    p {
      font-size: 21px;
    }
  }

  @media (max-width: 768px) {
    .desc-container {
      padding: 3rem 2rem 4rem 2rem;
    }

    .gojek-logo {
      width: 17rem;
    }

    .academy-logo {
      width: 25rem;
    }

    p {
      font-size: 18px;
    }

    .detail-btn {
      width: 8rem;
      padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    }
  }

  @media (max-width: 520px) {
    .title h1 {
      font-size: 38px;
    }

    .section-container {
      padding: 0rem 1rem 6rem 1rem;
    }
    .desc-container {
      padding: 2rem 1.2rem 3rem 1.2rem;
    }

    .gojek-logo {
      width: 12rem;
    }

    .academy-logo {
      width: 18rem;
    }

    p {
      font-size: 16px;
      line-height: 1.8rem;
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
