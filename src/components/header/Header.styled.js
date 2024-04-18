import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 64px;
  }

  div {
    p {
      font-weight: 500;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #121417;
    ${({ $burger }) => $burger === "burger-menu" && "color: white"}
  }

  a:hover {
    color: darkorange;
  }
`;
