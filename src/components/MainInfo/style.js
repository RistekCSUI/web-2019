import styled from "styled-components";

export const MainInfoContainer = styled.div`
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  h1 {
    color: ${props => props.theme.colors.primaryBlue};
    font-size: 50px;
    margin-bottom: 2rem;
  }

  p {
    color: ${props => props.theme.colors.black};
    font-size: 24px;
    line-height: 2.4rem;
  }

  .rowFirst,
  .rowVision,
  .rowMission {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
  }

  .rowVisionMobile {
    display: none;
  }

  .ristekLogo {
    background: ${props => props.theme.colors.white};
    padding: 9rem;
    border-radius: 50%;
    margin-right: 2.5rem;
  }

  .visionPict {
    margin-left: 2.5rem;
  }

  .missionPict {
    margin-right: 2.5rem;
  }

  .ristekImg {
    width: 17rem;
  }

  .visionImg {
    width: 34rem;
  }

  .missionImg {
    width: 34rem;
  }

  .descContainer {
    background: ${props => props.theme.colors.white};
    width: 100%;
  }

  .descStyle {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 3rem 0 2.5rem;
  }

  .missionRow {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }

  .missionNumber {
    margin-right: 1rem;
  }

  @media (max-width: 1440px) {
    .ristekImg {
      width: 16rem;
    }

    .visionImg {
      width: 32rem;
    }

    .missionImg {
      width: 32rem;
    }
    .ristekLogo {
      padding: 9rem;
    }

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 22px;
    }

    .missionRow {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 1360px) {
    .ristekImg {
      width: 16rem;
    }

    .visionImg {
      width: 30rem;
    }

    .missionImg {
      width: 30rem;
    }

    .ristekLogo {
      padding: 8rem;
    }

    h1 {
      margin-bottom: 1.8rem;
    }

    p {
      font-size: 20px;
      line-height: 2.2rem;
    }

    .descStyle {
      padding: 1rem 2.5rem 1rem 2.5rem;
    }
  }

  @media (max-width: 1126px) {
    .ristekImg {
      width: 14rem;
    }

    .visionImg {
      width: 30rem;
    }

    .missionImg {
      width: 30rem;
    }

    .ristekLogo {
      padding: 7rem;
    }

    h1 {
      font-size: 46px;
    }

    p {
      font-size: 18px;
      line-height: 2rem;
    }

    .descStyle {
      padding: 1rem 2rem 1rem 2rem;
    }

    .ristekLogo {
      margin-right: 1.5rem;
    }

    .visionPict {
      margin-left: 1.5rem;
    }

    .missionPict {
      margin-right: 1.5rem;
    }

    .missionRow {
      margin-bottom: 0rem;
    }
  }

  @media (max-width: 936px) {
    p {
      line-height: 2.4rem;
    }
    .rowFirst,
    .rowMission {
      flex-direction: column;
      margin-bottom: 2rem;
    }

    .rowVision {
      display: none;
    }

    .rowVisionMobile {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    .ristekLogo,
    .visionPict,
    .missionPict {
      margin: 0rem;
    }

    .ristekImg {
      width: 22rem;
    }

    .visionImg {
      width: 100%;
    }

    .missionImg {
      width: 100%;
    }

    .ristekLogo,
    .visionPict,
    .missionPict {
      margin-bottom: 2rem;
    }
    .ristekLogo {
      padding: 16rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .descStyle {
      padding: 10rem 2rem 10rem 2rem;
      max-height: 200px;
    }

    .missionRow {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 848px) {
    .ristekImg {
      width: 20rem;
    }

    .ristekLogo {
      padding: 13rem;
    }
  }

  @media (max-width: 768px) {
    .ristekImg {
      width: 19rem;
    }

    .ristekLogo {
      padding: 11rem;
    }
  }

  @media (max-width: 650px) {
    .ristekImg {
      width: 14rem;
    }

    .ristekLogo {
      padding: 8rem;
    }
  }

  @media (max-width: 450px) {
    .container {
      padding: 2rem 1rem 2rem 1rem;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 18px;
      line-height: 2rem;
    }

    .ristekImg {
      width: 12rem;
    }

    .missionRow {
      margin-bottom: 0.5rem;
    }

    .ristekLogo {
      padding: 7rem;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 38px;
    }

    .ristekImg {
      width: 10rem;
    }

    .ristekLogo {
      padding: 6rem;
    }

    .descStyle {
      padding: 5rem 1rem 5rem 1rem;
      max-height: 400px;
    }
  }

  @media (max-width: 360px) {
    .ristekLogo {
      padding: 5rem;
    }
  }

  @media (max-width: 320px) {
    .ristekLogo {
      padding: 4rem;
    }
  }
`;
