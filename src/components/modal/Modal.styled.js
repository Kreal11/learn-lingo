import styled from "styled-components";
// import { breakpoints } from "../../styles/breakpoints";

// const { tablet } = breakpoints;

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 23, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 10px;

  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2); */
`;

export const ContentWrapper = styled.div`
  position: relative;
  /* background-color: #1c1c1c; */
  border: 1px solid rgba(244, 244, 244, 0.3);
  overflow: hidden;
  border-radius: 20px;
  /* padding: 64px; */
  background-color: #ffffff;

  /* @media screen and (min-width: 768px) {
    padding: 32px;
  } */

  /* position: absolute;
  width: 290px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  border-radius: 30px;
  max-height: 100vh;
  padding: 32px;

  @media screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;
  } */
`;

export const StyledCloseButton = styled.button`
  border: none;
  padding: 5px;
  width: 18px;
  height: 18px;
  background-color: transparent;

  position: absolute;

  top: 14px;
  right: 20px;
  &:hover {
    transform: scale(1.2);
  }

  /*  */
`;
