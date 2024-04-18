import SvgWrapper from "../svg/SvgWrapper";
import { HeaderWrapper } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useModal } from "../../hooks/useModal";
import BurgerModal from "../burgerModal/BurgerModal";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = ({ authUser }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 767px)",
  });

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
          <BurgerMenu closeModal={closeModal} authUser={authUser} />
        </BurgerModal>
      )}
    </>
  );
};

export default Header;
