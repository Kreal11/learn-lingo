import styled from "styled-components";

export const Svg = styled.svg`
  width: ${(props) => {
    switch (props.$id) {
      case "ukraine":
      case "burger-menu":
        return "28px";
      case "star":
      case "opened-book":
        return "16px";
      case "log-in":
        return "20px";
      default:
        return "50px";
    }
  }};
  height: ${(props) => {
    switch (props.$id) {
      case "ukraine":
      case "burger-menu":
        return "28px";
      case "star":
      case "opened-book":
        return "16px";
      case "log-in":
        return "20px";
      default:
        return "50px";
    }
  }};
  fill: ${(props) => props.$burger === "burger" && "white"};
`;
