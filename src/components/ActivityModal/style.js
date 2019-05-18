import styled from "styled-components";

export const ActivityModalStyle = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1000;
    opacity: 1;
    animation: show 0.5s ease;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .container {
    width: 100%;
    padding: 2rem;
  }

  .modal {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1000px;
    max-height: 100%;
    background: #fff;
    box-shadow: 5px 12px 10px #0000;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .buttons-cont {
    display: flex;
    flex-direction: row;
  }

  .close-mobile {
    display: none;
  }

  .move-button {
    background: ${props => props.theme.colors.black};
    color: #f9f9f9;
    width: 6rem;
    text-align: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 16px;
    margin: 2rem 2rem 0 0;
    cursor: pointer;
  }

  .title-cont {
    margin-bottom: 1.2rem;
  }

  p {
    line-height: 1.6rem;
  }

  .desc-cont {
    text-align: justify;
  }

  .detail-container {
    margin-left: 2rem;
  }

  .activity-img {
    width: 525px;
  }

  h1 {
    color: ${props => props.theme.colors.primaryBlue};
    font-size: 42px;
    font-weight: 700;
    text-transform: capitalize;
  }

  @media (max-width: 1000px) {
    .close-button {
      display: none;
    }
    .close-mobile {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
    .modal {
      max-width: 750px;
      padding-bottom: 1.2rem;
    }
    .title-cont {
      margin-bottom: 1rem;
    }
    .container {
      flex-direction: column;
      padding: 4rem 2rem 4rem 2rem;
    }
    .activity-img {
      width: 680px;
    }
    .detail-container {
      margin-left: 0rem;
      padding: 1rem 0rem;
    }
    .close-mobile img {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 768px) {
    .modal-overlay {
      height: 100vh;
      background: white;
      padding: 0;
    }

    .modal {
      height: 100%;
      padding: 0;
      flex-direction: column;
    }

    .img-container {
      width: 100%;
    }

    .detail-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title-cont {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
    }

    .container {
      width: auto;
      height: 100%;
      padding: 1.5rem;
      padding-top: 6rem;
      justify-content: flex-start;
    }

    .title-cont {
      margin-top: 1.5rem;
    }

    .activity-img {
      width: 100%;
    }

    .close-mobile {
      top: 1.5rem;
      right: 1rem;
    }

    .buttons-cont {
      justify-content: space-between;
    }

    .move-button {
      width: 35%;
      margin: 0;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
      line-height: 1.2rem;
    }
    .close-mobile {
      top: 1.2rem;
      right: 1rem;
    }
    .close-mobile img {
      width: 28px;
      height: 28px;
    }
    .container {
      padding-top: 4rem;
    }
    .buttons-cont {
      padding-top: 0.5rem;
      padding-bottom: 2.5rem;
    }
  }

  @media (max-width: 375px) {
    .container {
      padding: 3.5rem 1.2rem 1.2rem 1.2rem;
    }
    .close-mobile img {
      width: 22px;
      height: 22px;
    }
    .close-mobile {
      top: 1rem;
      right: 0.8rem;
    }
    .detail-container {
      padding-top: 0.5rem;
      padding-bottom: 0;
    }
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 13px;
      line-height: 1.1rem;
    }
    .buttons-cont {
      padding-bottom: 1.5rem;
    }
    .move-button {
      width: 25%;
      font-size: 12px;
      padding: 0.5rem 0.8rem;
    }
  }

  @media (max-width: 330px) {
    p {
      font-size: 11px;
    }
  }
`;
