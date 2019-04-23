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
  }

  .image-box {
    background-color: #f5f5f5;
    width: 224px;
    height: 187px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .image {
    height: 45%;
    width: 75%;
  }

  .title p {
    width: 100%;
    text-align: center;
  }
`;
