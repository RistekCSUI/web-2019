import styled from "styled-components";
import ARROWLEFT from "../../assets/arrow-left.svg";
import ARROWRIGHT from "../../assets/arrow-right.svg";
export const ActivitySectionStyle = styled.div`
  overflow-x: hidden;
  background: ${props => props.theme.colors.white};

  .flex {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .centerize {
    justify-content: center;
    align-items: center;
  }

  .whole {
    width: 100vw;
    height: 70vh;
  }

  .maxWidth {
    width: 100%;
  }

  .topper-text-container {
    height: 10rem;

    .text-wrapper {
      h1 {
        font-size: 50px;
        color: ${props => props.theme.colors.primaryBlue};
      }
    }
  }
  .carousel {
    position: relative;
    width: 274px;
    overflow: hidden;

    .carousel-wrapper {
      display: flex;
      transition:transform 200ms cubic-bezier(0.4, 0.03, 0.5, 0.95);
    }
  }
  
  .button-container{
    width:40px;
  }
  
  .button {
    width:100%;
    height:66px;
    background-size:auto;
    background:blue;
    cursor:pointer;  
  }
  
  .left{
    //margin-right: 1rem;
    background:url(${ARROWLEFT}) no-repeat center center;
  }
  
   .right{
    //margin-left: 1rem;
    background:url(${ARROWRIGHT}) no-repeat center center;
  }

  .detail-btn {
    display: none;
    background: ${props => props.theme.colors.black};
    color: #f9f9f9;
    width: 8rem;
    text-align: center;
    padding: 0.75rem 2rem 0.75rem 2rem;
    font-size: 18px;
    margin-left: 1.35rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  

  @media(min-width: 1624px){
    .carousel{
      width:1500px;
      display:flex;
    }

    .whole {
      height: 80vh;
    }
  }

  @media (max-width: 1000px) {
    .detail-btn {
      display: block;
    }
  }
 
  @media(min-width: 700px) and (max-width:1000px){
    .carousel{
      width:500px;
    }

    .whole {
      height: 80vh;
    }

    .button-container {
      margin-bottom: 5rem;
    }

    .button {
      width:40px;
      height:40px;
      background-size:contain;  
    }
    .topper-text-container {
      .text-wrapper {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  
  @media(max-width: 700px) {
    .detail-btn {
      margin-left: 0rem;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
      p {
        font-size: 16px;
      }
    }

    .button-container {
      margin-bottom: 5rem;
    }

    .button {
      height: 32px;
    }

    .whole {
      width: 100vw;
      height: auto;
      padding: 1rem 0 4rem 0;
    }

    .topper-text-container{
      .text-wrapper{
        h1{
          font-size: 2em;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .detail-btn {
      padding: 0.6rem 1rem 0.6rem 1rem;
      margin-bottom: 0;
      p {
        font-size: 14px;
      }
    }
    .button-container {
      margin-bottom: 3rem;
    }
  }
  
   @media(min-width: 1000px) and (max-width:1624px){
    .carousel{
      width:900px;
    }
  }
  
  }
 
  
`;
