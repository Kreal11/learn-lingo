import { Svg } from "./SvgWrapper.styled";
import sprite from "/sprite.svg";

const SvgWrapper = ({ id, handleBurgerOpen, $burger }) => {
  const isBurger = id === "burger-menu";

  const handleClick = () => {
    if (isBurger) {
      handleBurgerOpen();
    }
  };

  return (
    <Svg $id={id} onClick={handleClick} $burger={$burger}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </Svg>
  );
};

export default SvgWrapper;
