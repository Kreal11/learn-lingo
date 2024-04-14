import styled from "styled-components";

export const StyledBurgerWrapper = styled.div`
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
`;

export const ContentBurgerWrapper = styled.div`
  position: relative;
  background-color: #1c1c1c;
  overflow: hidden;
  border-radius: 20px;
  padding: 60px;
  min-height: 100vh;
  min-width: 100vw;
`;
