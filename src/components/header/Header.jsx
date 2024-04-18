import SvgWrapper from "../svg/SvgWrapper";
import { HeaderWrapper } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useModal } from "../../hooks/useModal";
import BurgerModal from "../burgerModal/BurgerModal";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <HeaderWrapper>
        <div>
          <SvgWrapper id="ukraine" />
          <p>LearnLingo</p>
        </div>
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
