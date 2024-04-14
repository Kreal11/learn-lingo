import { NavLink } from "react-router-dom";
import { BurgerWrapper } from "./BurgerMenu.styled";
import { HeaderWrapper } from "../header/Header.styled";
import SvgWrapper from "../svg/SvgWrapper";

const BurgerMenu = ({ closeModal }) => {
  return (
    <BurgerWrapper>
      <HeaderWrapper>
        <div>
          <SvgWrapper id="ukraine" />
          <p>LearnLingo</p>
        </div>
        <SvgWrapper id="burger-menu" handleBurgerOpen={closeModal} />
      </HeaderWrapper>
      <div>
        <NavLink to="/" onClick={closeModal}>
          Home
        </NavLink>
        <NavLink to="teachers" onClick={closeModal}>
          Teachers
        </NavLink>
      </div>
    </BurgerWrapper>
  );
};

export default BurgerMenu;
