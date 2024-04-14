import { Svg } from "./SvgWrapper.styled";
import sprite from "/public/sprite.svg";

const SvgWrapper = ({ id }) => {
  return (
    <Svg $id={id}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </Svg>
  );
};

export default SvgWrapper;
