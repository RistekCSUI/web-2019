import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  .body {
    flex-basis: 20%;
    -ms-flex: auto;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    margin: 0;
  }

  .image-box {
    background-color: #f5f5f5;
    width: 224px;
    height: 187px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 1rem;
  }

  .image {
    height: 45%;
    width: 75%;
  }

  .title p {
    width: 100%;
    text-align: center;
  }

  div .body {
    margin: 0 0;
  }

  @media only screen and (max-width: 1024px) {
    .image-box {
      width: 112px;
      height: 94px;
    }

    div .title {
      margin: 0;
    }

    .title p {
      width: 100%;
      text-align: center;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 425px) {
    .image-box {
      width: 84px;
      height: 71px;
    }

    .title p {
      font-size: 9px;
    }
  }
`;
