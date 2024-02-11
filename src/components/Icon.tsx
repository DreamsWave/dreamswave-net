import { IconType } from "../types";
import { ICONS_PATHS } from "../constants";

const pixelSize = 5;

type IconProps = {
  type: IconType;
  color?: string;
  className?: string;
};
const Icon = ({ type, color = "#94b5bc", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={pixelSize * 10}
      height={pixelSize * 10}
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 10 10"
      className={className}
    >
      <g fill={color}>
        {ICONS_PATHS[type].map((path, index) => (
          <path key={index} d={path} />
        ))}
      </g>
    </svg>
  );
};

export default Icon;
