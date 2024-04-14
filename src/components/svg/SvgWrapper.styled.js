import styled from "styled-components";

export const Svg = styled.svg`
  width: ${(props) => {
    switch (props.$id) {
      case "ukraine":
      case "burger-menu":
        return "28px";
      default:
        return "50px";
    }
  }};
  height: ${(props) => {
    switch (props.$id) {
      case "ukraine":
      case "burger-menu":
        return "28px";
      default:
        return "50px";
    }
  }};
`;
