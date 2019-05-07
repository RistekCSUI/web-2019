import styled from "styled-components";

export const MainValuesContainer = styled.div`
  width: 100%;

  .container {
    background: black;
    padding: 4rem 0 6rem 0;
  }

  h1,
  h2,
  p {
    color: white;
  }

  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
    line-height: 2.4rem;
  }

  .titleSection {
    text-align: center;
    padding: 2rem;
  }

  .padder {
    margin: 2rem;
  }

  .imgContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }

  .valueImgDiv {
    margin: 2rem;
    position: relative;
  }

  .valueImg {
    width: 100%;
    height: 100%;
  }

  .valueDesc {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    padding: 1rem 0 1rem 0;
  }

  .valueDesc h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1366px) {
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 21px;
      line-height: 2.2rem;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 56px;
    }

    h2 {
      font-size: 38px;
    }

    p {
      font-size: 18px;
      line-height: 2rem;
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 4rem 1rem 4rem 1rem;
    }

    .valueImgDiv {
      margin: 1rem;
    }

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 35px;
    }

    .valueDesc h2 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 16.5px;
      line-height: 2rem;
    }
  }

  @media (max-width: 942px) {
    h1 {
      font-size: 44px;
    }

    h2 {
      font-size: 32px;
    }

    .valueDesc h2 {
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 15px;
      line-height: 1.6rem;
    }
  }

  @media (max-width: 848px) {
    .imgContainer {
      flex-direction: column;
      justify-content: center;
    }

    .padder {
      display: none;
    }

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 24px;
      line-height: 2.4rem;
    }

    .valueDesc {
      padding: 1rem 0 8rem 0;
    }
  }

  @media (max-width: 640px) {
    .valueDesc {
      padding: 1rem 0 1rem 0;
    }

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 40px;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 24px;
      line-height: 2rem;
    }
  }

  @media (max-width: 460px) {
    .container {
      padding: 3rem 0rem 3rem 0rem;
    }

    .titleSection {
      padding: 1rem;
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 36px;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 394px) {
    h1 {
      font-size: 38px;
    }

    h2 {
      font-size: 32px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
      line-height: 1.5rem;
    }
  }
`;
