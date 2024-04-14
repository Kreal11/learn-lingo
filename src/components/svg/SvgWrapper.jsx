import { Svg } from "./SvgWrapper.styled";
import sprite from "/sprite.svg";

const SvgWrapper = ({ id, handleBurgerOpen }) => {
  const isBurger = id === "burger-menu";

  const handleClick = () => {
    if (isBurger) {
      handleBurgerOpen();
    }
  };

  return (
    <Svg $id={id} onClick={handleClick}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </Svg>
  );
};

export default SvgWrapper;
