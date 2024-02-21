import { useTheme } from "styled-components";
import icons, { IconNames } from "../icons-svg.ts";
import { Theme } from "../types.ts";
import { animated, useSpring } from "@react-spring/web";

type SVGProps = {
  className?: string;
  iconName: IconNames;
  fill?: string;
  size?: keyof Theme["iconSizeFactor"];
};

function SVGIcon({ className, iconName, fill, size = "main" }: SVGProps) {
  const theme = useTheme();
  const icon = icons[iconName];
  const fillTransition = useSpring({
    fill: fill || theme.palette.icon.main,
  });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.spacing(theme.iconSizeFactor[size])}
      height={theme.spacing(theme.iconSizeFactor[size])}
      baseProfile="tiny"
      version="1.2"
      viewBox={`0 0 ${icon.width} ${icon.height}`}
      className={className}
      style={fillTransition}
    >
      {icon.paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </animated.svg>
  );
}

export default SVGIcon;
