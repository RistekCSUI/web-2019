import styled from "styled-components";

export const AchievementContainer = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.black};
    margin: 5rem 0 5rem 0;
    padding: 1rem;
  }

  .main .main-body,
  .main .upper-title,
  .lower-title {
    margin: 0 0 2rem 0;
  }

  .upper-title h1 {
    font-size: 50px;
    text-align: center;
  }

  .lower-title {
    width: 70vw;
    text-align: center;
    font-size: 22px;
  }

  .main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    width: 85vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    .main {
      margin: 2rem 0;
      margin-top: 4rem;
      padding: 0;
    }

    .upper-title h1 {
      font-size: 38px;
    }

    .lower-title p {
      font-size: 16px;
    }
  }
`;
