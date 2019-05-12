import styled from "styled-components";

export const LoadingContainer = styled.div`

.loading {
  display: flex;
  width:100%;
  height:100%;
  justify-content: center;
  top:50%;
  background:transparent;

  .circ {
    width: 2.25rem;
    height: 2.25rem;
    margin: 2rem 1.25rem;
    background: #A0D1CC;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;
  }
  .circ:nth-child(2) {
    background: #589F97;
    animation-delay: 0.3s;
  }

  .circ:nth-child(3) {
    background: #146259;
    animation-delay: 0.6s;
  }

  @keyframes bounce {
    to {
        opacity: 0;
        transform: translate3d(0, -4rem, 0);
    }
  }
}

@media (max-width:728px) {
  .loading {
    width:100px;
    height:50px;

  .circ {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.5rem;
  }
    @keyframes bounce {
  to {
    opacity:0;
    transform: translate3d(0, -2.25rem, 0);
  }

}
`;
