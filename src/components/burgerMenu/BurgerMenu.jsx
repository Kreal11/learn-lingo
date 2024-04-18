import { NavLink } from "react-router-dom";
import {
  BurgerWrapper,
  ButtonsWrapper,
  LoginButton,
  NavLinkWrapper,
  RegisterButton,
} from "./BurgerMenu.styled";
import { HeaderWrapper } from "../header/Header.styled";
import SvgWrapper from "../svg/SvgWrapper";
import { useState } from "react";
import Modal from "../modal/Modal";
import { Login } from "../login/Login";
import { Register } from "../register/Register";

const BurgerMenu = ({ closeModal }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleRegisterOpen = () => {
    setIsRegister(true);
    // closeModal();
  };

  const handleLoginOpen = () => {
    console.log(isLogin);
    setIsLogin(true);
    // closeModal();
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
        </NavLinkWrapper>
        <ButtonsWrapper>
          <LoginButton onClick={handleLoginOpen} $burger="burger-menu">
            <SvgWrapper id="log-in" />
            Log In
          </LoginButton>
          <RegisterButton onClick={handleRegisterOpen}>Register</RegisterButton>
        </ButtonsWrapper>
      </BurgerWrapper>
      {isLogin && (
        <Modal>
          <Login />
        </Modal>
      )}
      {isRegister && (
        <Modal>
          <Register />
        </Modal>
      )}
    </>
  );
};

export default BurgerMenu;
