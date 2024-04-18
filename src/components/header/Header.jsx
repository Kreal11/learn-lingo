import SvgWrapper from "../svg/SvgWrapper";
import { HeaderWrapper } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useModal } from "../../hooks/useModal";
import BurgerModal from "../burgerModal/BurgerModal";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <HeaderWrapper>
        <NavLink to="/">
          <SvgWrapper id="ukraine" />
          <p>LearnLingo</p>
        </NavLink>
        <SvgWrapper id="burger-menu" handleBurgerOpen={openModal} />
      </HeaderWrapper>
      {isOpen && (
        <BurgerModal closeModal={closeModal}>
          <BurgerMenu closeModal={closeModal} />
        </BurgerModal>
      )}
    </>
  );
};

export default Header;
