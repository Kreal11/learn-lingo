import styled from "styled-components";

export const H1heading = styled.h1`
  /* font-family: "Roboto", sans-serif; */
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  text-align: left;

  span {
    position: relative;
    font-size: 48px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: -0.02em;
    text-align: left;
    max-height: 40px;
  }

  span::before {
    content: "";
    position: absolute;
    top: 80%;
    right: 0;
    transform: translateY(-50%);
    background-color: rgba(251, 233, 186, 1);
    width: 200px;
    height: 34px;
    border-radius: 8px;
    z-index: -1;
  }
`;
