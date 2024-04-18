import { NavLink } from "react-router-dom";
import {
  BurgerWrapper,
  ButtonsWrapper,
  LogButton,
  NavLinkWrapper,
  RegisterButton,
} from "./BurgerMenu.styled";
import { HeaderWrapper } from "../header/Header.styled";
import SvgWrapper from "../svg/SvgWrapper";
import { useState } from "react";
import Modal from "../modal/Modal";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const BurgerMenu = ({ closeModal, authUser }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleRegisterOpen = () => {
    setIsRegister(true);
  };

  const handleLoginOpen = () => {
    setIsLogin(true);
  };

  const handleLogOUt = () => {
    signOut(auth);
    closeModal();
  };

  const handleCloseLogin = () => {
    setIsLogin(false);
  };

  const handleCloseRegister = () => {
    setIsRegister(false);
  };

  return (
    <>
      <BurgerWrapper>
        <HeaderWrapper>
          <NavLink to="/" $burger="burger-menu">
            <SvgWrapper id="ukraine" />
            <p>LearnLingo</p>
          </NavLink>
          <SvgWrapper
            id="burger-menu"
            handleBurgerOpen={closeModal}
            $burger="burger"
          />
        </HeaderWrapper>
        <NavLinkWrapper>
          <NavLink to="/" onClick={closeModal}>
            Home
          </NavLink>
          <NavLink to="teachers" onClick={closeModal}>
            Teachers
          </NavLink>
          {authUser && (
            <NavLink to="favorites" onClick={closeModal}>
              Favorites
            </NavLink>
          )}
        </NavLinkWrapper>
        <ButtonsWrapper>
          {!authUser && (
            <>
              <LogButton onClick={handleLoginOpen} $burger="burger-menu">
                <SvgWrapper id="log" />
                Log In
              </LogButton>
              <RegisterButton onClick={handleRegisterOpen}>
                Register
              </RegisterButton>
            </>
          )}
          {authUser && (
            <LogButton onClick={handleLogOUt} $burger="burger-menu">
              <SvgWrapper id="log" />
              Log out
            </LogButton>
          )}
        </ButtonsWrapper>
      </BurgerWrapper>
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

export default BurgerMenu;
