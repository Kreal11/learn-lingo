import { NavLink } from "react-router-dom";
import { BurgerWrapper } from "./BurgerMenu.styled";

const BurgerMenu = ({ closeModal }) => {
  return (
    <BurgerWrapper>
      <NavLink to="/" onClick={closeModal}>
        Home
      </NavLink>
      <NavLink to="teachers" onClick={closeModal}>
        Teachers
      </NavLink>
    </BurgerWrapper>
  );
};

export default BurgerMenu;
