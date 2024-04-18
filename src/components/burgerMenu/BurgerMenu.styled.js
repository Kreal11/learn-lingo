import styled from "styled-components";

export const BurgerWrapper = styled.div`
  padding: 16px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: white;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  a:visited {
    color: white;
  }

  a:hover {
    color: darkorange;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: ${({ $burger }) =>
    $burger === "burger-menu" ? "column" : "row"};
  justify-content: center;
  gap: 30px;
  align-items: center;
  font-size: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const LogButton = styled.button`
  ${({ $burger }) =>
    $burger === "burger-menu" ? "color: white" : "color: #121417"};
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  background: none;
  min-width: 73px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
    color: #2b2e35;
  }
`;

export const RegisterButton = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background: ${({ theme }) => theme.primaryBlack};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background: #8a8a89;
  }
`;
