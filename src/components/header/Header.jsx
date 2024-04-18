import SvgWrapper from "../svg/SvgWrapper";
import { HeaderWrapper } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useModal } from "../../hooks/useModal";
import BurgerModal from "../burgerModal/BurgerModal";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  ButtonsWrapper,
  LogButton,
  RegisterButton,
} from "../burgerMenu/BurgerMenu.styled";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Modal from "../modal/Modal";
import { Login } from "../login/Login";
import { Register } from "../register/Register";

const Header = ({ authUser }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const handleRegisterOpen = () => {
    setIsRegister(true);
    // closeModal();
  };

  const handleLoginOpen = () => {
    setIsLogin(true);
    // closeModal();
  };

  const handleLogOUt = () => {
    signOut(auth);
  };

  const handleCloseLogin = () => {
    setIsLogin(false);
  };

  const handleCloseRegister = () => {
    setIsRegister(false);
  };

  return (
    <>
      <HeaderWrapper>
        <NavLink to="/">
          <SvgWrapper id="ukraine" />
          <p>LearnLingo</p>
        </NavLink>
        {isMobileOrTablet ? (
          <SvgWrapper id="burger-menu" handleBurgerOpen={openModal} />
        ) : (
          <ButtonsWrapper>
            {!authUser && (
              <LogButton onClick={handleLoginOpen}>
                <SvgWrapper id="log" />
                Log In
              </LogButton>
            )}
            {authUser && (
              <LogButton onClick={handleLogOUt}>
                <SvgWrapper id="log" />
                Log out
              </LogButton>
            )}
            <RegisterButton onClick={handleRegisterOpen}>
              Register
            </RegisterButton>
          </ButtonsWrapper>
        )}
      </HeaderWrapper>
      {isOpen && (
        <BurgerModal closeModal={closeModal}>
          <BurgerMenu closeModal={closeModal} authUser={authUser} />
        </BurgerModal>
      )}
      {isLogin && (
        <Modal closeModal={handleCloseLogin}>
          <Login closeModal={handleCloseLogin} />
        </Modal>
      )}
      {isRegister && (
        <Modal closeModal={handleCloseRegister}>
          <Register closeModal={handleCloseRegister} />
        </Modal>
      )}
    </>
  );
};

export default Header;
