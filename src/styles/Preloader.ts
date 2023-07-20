import styled from "styled-components";

export const Preloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  @media (max-width: 1000px) {
      height: 300px;
  }
  
  svg {
      animation: preloader-rotate 1.5s infinite linear;

      @media (max-width: 1000px) {
          width: 120px;
          height: 120px;
      }

      @media (max-width: 500px) {
          width: 100px;
          height: 100px;
      }
  }

  @keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`