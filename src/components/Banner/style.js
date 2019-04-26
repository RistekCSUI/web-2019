import styled from "styled-components";
import banner from "../../assets/main-pict.png";

export const BannerContainer = styled.div`
  display: flex;
  height: 90vh;
  background: url(${banner});
  background-origin: padding-box;
  background-size: cover;
  padding-top: 4.5rem;
  border: 1.6rem solid white;
  flex-direction: column;
  position: relative;

  .middle-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    flex-basis: 90%;

    .ristek-logo {
      margin: 2rem 0 1rem 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 150px;
    }

    .ristek-caption {
      font-weight: bolder;
      font-weight: 1000; // extrabold for chrome
      font-size: 34px;
      color: ${props => props.theme.colors.black};
    }
  }

  .bot-content {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .hashtag-wrap {
      width: 100%;
      text-align: center;

      img {
        width: 20%;
      }
    }

    .bentuk-wrap {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      text-align: right;

      img {
        width: 50%;
      }
    }
  }

  @media only screen and (min-width: 2050px) {
    .middle-content {
      margin-top: 15rem;
      align-content: center;
      align-items: center;
    }

    .bot-content {
      height: 20%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .middle-content {
      margin-top: 10em;

      .ristek-logo {
        height: 200px;
      }

      .ristek-caption {
        font-size: 40px;
      }
    }

    .bot-content {
      .hashtag-wrap {
        img {
          width: 40%;
        }
      }
      .bentuk-wrap {
        width: 30%;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .middle-content {
      margin-top: 5em;

      .ristek-logo {
        height: 100px;
      }

      .ristek-caption {
        font-size: 18px;
      }
    }

    .bot-content {
      .hashtag-wrap {
        img {
          width: 40%;
        }
      }
      .bentuk-wrap {
        width: 30%;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .middle-content {
      margin-top: 5em;

      .ristek-logo {
        height: 100px;
      }

      .ristek-caption {
        font-size: 16px;
      }
    }

    .bot-content {
      .hashtag-wrap {
        img {
          width: 40%;
        }
      }
      .bentuk-wrap {
        width: 30%;
      }
    }
  }
`;
