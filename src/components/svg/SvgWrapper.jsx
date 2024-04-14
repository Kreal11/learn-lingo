import sprite from "../../../public/sprite.svg";

const SvgWrapper = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default SvgWrapper;
