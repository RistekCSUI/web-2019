import styled from "styled-components";

export const ActivityCardStyle = styled.div`
  .flex {
    display: flex;
  }

  .centerize {
    justify-content: center;
    align-items: center;
  }

  .column {
    flex-direction: column;
  }

  .card-container {
    width: 250px;
    margin: 12px;

    .image-container {
      width: 100%;
      height: 200px;
      background: ${props =>
        `url(${props.background}) no-repeat center center`};
      background-size: cover;
      -webkit-filter: brightness(100%);
      -moz-filter: brightness(100%);
      -o-filter: brightness(100%);
      -ms-filter: brightness(100%);
      filter: brightness(100%);
    }
    .activity-title {
      width: 100%;
      h3 {
        font-size: 21px;
        padding: 0;
        margin: 4px 0;
        text-transform: capitalize;
      }
    }
    .detail-button {
      cursor: pointer;
      p {
        font-weight: 700;
        font-size: 25px;
        color: white;
      }

      border-style: solid;
      border-width: 4px;
      border-color: white;
      display: none;
      padding: 0.5rem 2.5rem;
      z-index: 2;
    }
  }

  @media (min-width: 1000px) {
    .image-container:hover {
      -webkit-filter: brightness(40%);
      -moz-filter: brightness(40%);
      -o-filter: brightness(40%);
      -ms-filter: brightness(40%);
      filter: brightness(40%);
      transition: 0.8s;

      .detail-button {
        display: inline-block;
        -webkit-filter: brightness(100%);
        -moz-filter: brightness(100%);
        -o-filter: brightness(100%);
        -ms-filter: brightness(100%);
        filter: brightness(100%);
      }
    }
  }

  @media (min-width: 1624px) {
    .card-container {
      min-width: 475px;
      .image-container {
        height: 320px;
      }

      .activity-title {
        h3 {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 700px) and (max-width: 1000px) {
    .card-container {
      width: 500px;
      .image-container {
        height: 400px;
      }

      .activity-title {
        h3 {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 1000px) and (max-width: 1624px) {
    .card-container {
      width: 275px;
      .image-container {
        height: 225px;
      }

      .activity-title {
        h3 {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
      }
      .detail-button {
        p {
          font-size: 18px;
        }

        border-width: 3px;
        padding: 0.5rem 2.5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .activity-title {
      margin-top: 1rem;
    }
  }
`;
