import { useTheme } from "styled-components";
import { Theme } from "../types.ts";
import { animated, useSprings } from "@react-spring/web";
import { useAppSelector } from "../hooks.ts";
import { selectPixelSize } from "../features/pixelSize/pixelSizeSlice.ts";

type PixelSizeIconProps = {
  className?: string;
  fill?: string;
  activeFill?: string;
  size?: keyof Theme["iconSizeFactor"];
};
function PixelSizeIcon({
  className,
  fill,
  size = "main",
  activeFill,
}: PixelSizeIconProps) {
  const { availablePixelSizes, pixelSize } = useAppSelector(selectPixelSize);
  const theme = useTheme();

  const paths = ["M0 2h1v1H0z", "M2 1h2v2H2z", "M5 0h3v3H5z"];

  const springs = useSprings(
    paths.length,
    paths.map((_, index) => ({
      fill:
        pixelSize === availablePixelSizes[index]
          ? activeFill || theme.palette.icon.active
          : fill || theme.palette.icon.main,
    }))
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.spacing(theme.iconSizeFactor[size])}
      height={theme.spacing(theme.iconSizeFactor[size])}
      baseProfile="tiny"
      version="1.2"
      viewBox={`0 0 8 3`}
      className={className}
    >
      {springs.map((spring, index) => (
        <animated.path key={index} d={paths[index]} style={spring} />
      ))}
    </svg>
  );
}

export default PixelSizeIcon;
