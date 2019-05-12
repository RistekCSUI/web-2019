import styled from "styled-components";
import banner from "../../assets/main-background.jpg";

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
      margin-top: 1.5rem;
      font-weight: bolder;
      font-weight: 1000; // extrabold for chrome
      font-size: 34px;
      color: ${props => props.theme.colors.black};
    }
  }

  .bot-content,
  .bot-content-mobile {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: white;
      font-size: 21px;
    }

    .hashtag-wrap {
      width: 100%;
      text-align: left;
      left: 1rem;
      bottom: 1.5rem;
      position: absolute;

      img {
        width: 12%;
      }
    }

    .gojek-wrap {
      text-align: center;
      position: absolute;
      bottom: 2rem;
      img {
        margin-top: 1.5rem;
        width: 90%;
      }
    }

    .bentuk-wrap {
      position: absolute;
      right: 1rem;
      bottom: 1.5rem;
      text-align: right;

      img {
        width: 60%;
      }
    }
  }

  .bot-content-mobile {
    display: none;
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

  @media (max-width: 1024px) {
    .middle-content {
      margin-top: 5em;

      .ristek-logo {
        height: 160px;
      }

      .ristek-caption {
        font-size: 34px;
      }
    }

    .bot-content {
      display: none;
    }

    .bot-content-mobile {
      position: absolute;
      bottom: 2rem;
      display: block;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .hashtag-wrap {
        position: relative;
        left: 0;
        bottom: 1rem;
        text-align: center;
        img {
          margin-top: 2rem;
          width: 25%;
        }
      }
      .gojek-wrap {
        p {
          font-size: 28px;
        }
        position: relative;
        img {
          width: 35%;
        }
      }
      .bentuk-wrap {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .bot-content-mobile {
      position: absolute;
      bottom: 1rem;

      .gojek-wrap {
        p {
          font-size: 21px;
        }
      }
    }
  }

  @media (max-width: 575px) {
    .bot-content-mobile {
      position: absolute;
      bottom: 0rem;

      .hashtag-wrap {
        img {
          width: 35%;
        }
      }
      .gojek-wrap {
        img {
          margin-top: 0.5rem;
          width: 45%;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    height: 85vh;
    .bot-content-mobile {
      position: absolute;
      bottom: 0rem;

      .hashtag-wrap {
        img {
          margin-top: 1.5rem;
          width: 40%;
        }
      }
      .gojek-wrap {
        p {
          font-size: 14px;
        }
        img {
          margin-top: 0.5rem;
          width: 45%;
        }
      }
    }

    border: 1rem solid white;
    .middle-content {
      margin-top: 5em;

      .ristek-logo {
        height: 100px;
      }

      .ristek-caption {
        margin-top: 0.5rem;
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
