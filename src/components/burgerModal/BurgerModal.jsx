import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ContentBurgerWrapper,
  StyledBurgerCloseButton,
  StyledBurgerWrapper,
} from "./BurgerModal.styled";

const rootModal = document.querySelector("#modal");

const BurgerModal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  if (rootModal) {
    return ReactDOM.createPortal(
      <StyledBurgerWrapper onClick={handleBackDrop}>
        <ContentBurgerWrapper>{children}</ContentBurgerWrapper>
      </StyledBurgerWrapper>,
      rootModal
    );
  }

  return null;
};

export default BurgerModal;
