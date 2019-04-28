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
    }
    .activity-title {
      width: 100%;
      h3 {
        padding: 0;
        margin: 4px 0;
        text-transform: capitalize;
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
    }
  }
`;
