import styled from "styled-components";
import { Theme } from "../types";

const PixelBordersRoot = styled.div(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.pixelCardBorder,
}));

const BordersContainer = styled.div(() => ({
  height: "100%",
  width: "100%",
  position: "relative",
}));

type BorderDirection = "top" | "bottom" | "left" | "right";
type BorderProps = {
  color?: string;
  gradient?: {
    from: string;
    to: string;
    deg?: number;
  };
  $focus?: boolean;
  $hover?: boolean;
  direction?: BorderDirection;
};

export const Border = styled.div<BorderProps>(
  ({ theme, color, gradient, $focus, $hover, direction }) => {
    const styles = createBorder(
      direction || "top",
      theme,
      color,
      gradient,
      $focus,
      $hover
    );
    return {
      position: "absolute",
      ...styles,
    };
  }
);

const createBorder = (
  direction: BorderDirection,
  theme: Theme,
  color?: string,
  gradient?: { from: string; to: string; deg?: number },
  $focus?: boolean,
  $hover?: boolean
) => {
  const commonStyles = {
    width: theme.spacing(1),
    height: `calc(100% - ${theme.spacing(2)})`,
  };

  let background;
  if ($focus) {
    background = `linear-gradient(180deg, ${theme.palette.border.focus} 0%, ${theme.palette.border.focus} 100%)`;
  } else if ($hover) {
    background = `linear-gradient(180deg, ${theme.palette.border.hover} 0%, ${theme.palette.border.hover} 100%)`;
  } else {
    const gradientColor = gradient
      ? `linear-gradient(${gradient.deg || 180}deg, ${gradient.from} 0%, ${
          gradient.to
        } 100%)`
      : direction === "top"
      ? `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.from} 100%)`
      : direction === "bottom"
      ? `linear-gradient(180deg, ${theme.palette.border.gradient.to} 0%, ${theme.palette.border.gradient.to} 100%)`
      : `linear-gradient(180deg, ${theme.palette.border.gradient.from} 0%, ${theme.palette.border.gradient.to} 100%)`;
    background = color || gradientColor;
  }

  const positionStyles = ["top", "bottom"].includes(direction)
    ? {
        top: direction === "top" ? 0 : "auto",
        bottom: direction === "bottom" ? 0 : "auto",
        left: theme.spacing(1),
        width: `calc(100% - ${theme.spacing(2)})`,
        height: theme.spacing(1),
      }
    : {
        top: theme.spacing(1),
        [direction]: 0,
      };

  return {
    ...commonStyles,
    ...positionStyles,
    background,
  };
};

type PixelBordersProps = {
  color?: string;
  gradient?: {
    from: string;
    to: string;
    deg?: number;
  };
  focus?: boolean;
  hover?: boolean;
};

function PixelBorders(props: PixelBordersProps) {
  const { color, gradient, focus = false, hover = false } = props;
  const borderProps = { color, gradient, $focus: focus, $hover: hover };
  return (
    <PixelBordersRoot>
      <BordersContainer>
        <Border {...borderProps} direction="top" />
        <Border {...borderProps} direction="right" />
        <Border {...borderProps} direction="bottom" />
        <Border {...borderProps} direction="left" />
      </BordersContainer>
    </PixelBordersRoot>
  );
}

export default PixelBorders;
