import { NavLink } from "react-router-dom";
import { BurgerWrapper } from "./BurgerMenu.styled";
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
          <div>
            <SvgWrapper id="ukraine" />
            <p>LearnLingo</p>
          </div>
          <SvgWrapper
            id="burger-menu"
            handleBurgerOpen={closeModal}
            $burger="burger"
          />
        </HeaderWrapper>
        <div>
          <NavLink to="/" onClick={closeModal}>
            Home
          </NavLink>
          <NavLink to="teachers" onClick={closeModal}>
            Teachers
          </NavLink>
        </div>
        <div>
          <button onClick={handleLoginOpen}>Log In</button>
          <button onClick={handleRegisterOpen}>Register</button>
        </div>
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
