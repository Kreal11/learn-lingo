import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  mask-type: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 53px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const ListItem = styled.li`
  width: 280px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 24px;
  background: #fff;

  @media screen and (min-width: 768px) {
    gap: 48px;
    width: 100%;
  }

  @media screen and (min-width: 1400px) {
    align-items: flex-start;
    margin-bottom: 53px;
    flex-wrap: nowrap;
    width: 1184px;
    padding: 24px;
  }
`;
