import styled from "styled-components";

export const DivisionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;

  .title-container {
    color: ${props => props.theme.colors.black};
    text-align: center;
    margin: 1rem 0;

    .title {
      margin: 1rem;
      font-size: 50px;
    }

    p {
      font-size: 20px;
      margin: 0.5rem;
    }
  }

  .pi-cardlist-container {
    margin: 1rem 0;
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    justify-content: space-between;

    .card-container {
      text-align: center;
      // flex-grow: 2;
      margin: 1rem;

      .card-content-container {
        padding: 4rem;

        img {
          width: 70%;
        }

        p {
          margin: 1.5rem 0;
          font-size: 22px;
          color: ${props => props.theme.colors.black};
        }
      }
    }

    // .card-container: last-child {
    //   flex-basis: 46%;
    //   flex-grow: 0;
    // }
  }

  .bph-cardlist-container {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // flex-wrap: wrap;

    .group-card-container {
      margin: 1rem 0;
      padding: 0 1.6rem;
      flex-basis: 47%;

      .group-card-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-content: center;

        .group-card-title {
          color: ${props => props.theme.colors.primaryBlue};
          font-weight: 900;
          font-size: 32px;
          margin-bottom: 1rem;
        }

        .group-list {
          color: ${props => props.theme.colors.black};
          font-size: 22px;
        }
      }
    }
  }

  @media only screen and (min-width: 2560px) {
    .title-container {
      margin-bottom: 0;

      .title {
        font-size: 80px;
      }

      p {
        font-size: 40px;
      }
    }

    .pi-cardlist-container {
      margin: 2rem 0;
      // flex-wrap: wrap;

      .card-container {
        // flex-basis: 35%;
        flex-grow: 0.1;

        .card-content-container {
          padding: 4rem;

          img {
            // width: 100%;
          }

          p {
            margin: 2rem 0;
            font-size: 50px;
          }
        }
      }
    }
    .bph-cardlist-container {
      // flex-wrap: wrap;

      .group-card-container {
        margin: 0;
        flex-basis: 100%;

        .group-card-content {
          .group-card-title {
            font-size: 52px;
            line-height: 1.4;
          }

          .group-list {
            font-size: 42px;
          }
        }
      }

      .group-card-container: first-child {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .title-container {
      margin-bottom: 0;

      .title {
        font-size: 38px;
        margin: 0;
      }
    }

    .pi-cardlist-container {
      margin: 0;
      // flex-wrap: wrap;

      .card-container {
        // flex-basis: 35%;
        flex-grow: 1;

        .card-content-container {
          padding: 1.5rem;

          img {
            // width: 100%;
          }

          p {
            margin: 0.5rem 0;
            font-size: 20px;
          }
        }
      }

      .card-container: last-child {
        flex-grow: 0.1;
      }
    }
    .bph-cardlist-container {
      // flex-wrap: wrap;

      .group-card-container {
        margin: 0;
        flex-basis: 100%;

        .group-card-content {
          .group-card-title {
            font-size: 22px;
            line-height: 1.4;
          }

          .group-list {
            font-size: 18px;
          }
        }
      }

      .group-card-container: first-child {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .title-container {
      margin-bottom: 0;

      .title {
        font-size: 38px;
        margin: 0;
      }

      p {
        display: none;
      }
    }

    .pi-cardlist-container {
      margin: 0;
      // flex-wrap: wrap;

      .card-container {
        // flex-basis: 35%;
        flex-grow: 1;

        .card-content-container {
          padding: 1.5rem;

          img {
            // width: 100%;
          }

          p {
            margin: 0.5rem 0;
            font-size: 16px;
          }
        }
      }

      .card-container: last-child {
        flex-grow: 0.1;
      }
    }

    .bph-cardlist-container {
      // flex-wrap: wrap;

      .group-card-container {
        margin: 0;
        padding: 0 1rem;
        flex-basis: 100%;

        .group-card-content {
          .group-card-title {
            font-size: 21px;
            line-height: 1.4;
          }

          .group-list {
            font-size: 16px;
          }
        }
      }

      .group-card-container: first-child {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 0 1rem;
    padding-top: 3rem;
    .title-container {
      margin-bottom: 1.5rem;

      .title {
        font-size: 38px;
        margin: 0;
      }

      p {
        display: none;
      }
    }

    .pi-cardlist-container {
      margin: 0;
      flex-wrap: wrap;
      padding: 0;

      .card-container {
        flex-basis: 35%;
        flex-grow: 1;

        .card-content-container {
          padding: 1.5rem;

          img {
            width: 100%;
          }

          p {
            margin: 0.5rem 0;
            font-size: 16px;
          }
        }
      }

      .card-container: last-child {
        flex-grow: 0.1;
      }
    }

    .bph-cardlist-container {
      flex-wrap: wrap;

      .group-card-container {
        margin: 1rem 0;
        flex-basis: 100%;

        .group-card-content {
          .group-card-title {
            font-size: 22px;
            line-height: 1.4;
          }

          .group-list {
            font-size: 16px;
          }
        }
      }

      .group-card-container: first-child {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .title-container {
      margin-bottom: 0;

      .title {
        font-size: 38px;
        margin: 0;
      }

      p {
        display: none;
      }
    }

    .pi-cardlist-container {
      margin: 0;
      flex-wrap: wrap;

      .card-container {
        flex-basis: 35%;
        flex-grow: 1;

        .card-content-container {
          padding: 1.5rem;

          img {
            width: 100%;
          }

          p {
            margin: 0.5rem 0;
            font-size: 14px;
          }
        }
      }

      .card-container: last-child {
        flex-grow: 0.1;
      }
    }

    .bph-cardlist-container {
      flex-wrap: wrap;

      .group-card-container {
        margin: 1rem 0;
        flex-basis: 100%;

        .group-card-content {
          .group-card-title {
            font-size: 20px;
            line-height: 1.4;
          }

          .group-list {
            font-size: 14px;
          }
        }
      }

      .group-card-container: first-child {
        margin: 0;
      }
    }
  }
`;
