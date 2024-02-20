import { useSpring, animated, config } from "@react-spring/web";
import styled, { useTheme } from "styled-components";
import {
  BackgroundSVG,
  CloudBackSVG,
  CloudLeftSVG,
  CloudMiddleSVG,
  CloudRightSVG,
  StarsSVG,
} from "./SVGBackground";
import { Theme } from "../types";
import { useEffect } from "react";

const BackgroundWrapper = styled(animated.div)<{ $backgroundColor: string }>`
  --background-color: ${({ $backgroundColor }) => $backgroundColor};

  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: var(--background-color);
  transition: background 0.3s ease-in-out;
`;

const Layer = styled(animated.div)`
  height: calc(100% + 60px);
  width: calc(100% + 60px);
  top: -30px;
  left: -30px;
  position: absolute;
  transition: background 0.3s ease-in-out;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

type BackgroundProps = {
  mouseX: number;
  mouseY: number;
};

function Background({ mouseX, mouseY }: BackgroundProps) {
  const theme: Theme = useTheme();

  const [{ x1, y1 }, api1] = useSpring(() => ({
    x1: 0,
    y1: 0,
    config: config.gentle,
  }));
  const [{ x2, y2 }, api2] = useSpring(() => ({
    x2: 0,
    y2: 0,
    config: config.gentle,
  }));
  const [{ x3, y3 }, api3] = useSpring(() => ({
    x3: 0,
    y3: 0,
    config: config.gentle,
  }));
  const [{ x4, y4 }, api4] = useSpring(() => ({
    x4: 0,
    y4: 0,
    config: config.gentle,
  }));

  useEffect(() => {
    api1.start({ x1: Math.round(mouseX / 80), y1: Math.round(mouseY / 20) });
    api2.start({ x2: Math.round(mouseX / 120), y2: Math.round(mouseY / 30) });
    api3.start({ x3: Math.round(mouseX / 160), y3: Math.round(mouseY / 40) });
    api4.start({ x4: Math.round(mouseX / 400), y4: Math.round(mouseY / 100) });
  }, [mouseX, mouseY, api1, api2, api3, api4]);

  const transX1 = x1.to((val) => -Math.round(val));
  const transY1 = y1.to((val) => -Math.round(val));
  const transX2 = x2.to((val) => -Math.round(val));
  const transY2 = y2.to((val) => -Math.round(val));
  const transX3 = x3.to((val) => -Math.round(val));
  const transY3 = y3.to((val) => -Math.round(val));
  const transX4 = x4.to((val) => -Math.round(val));
  const transY4 = y4.to((val) => -Math.round(val));

  return (
    <BackgroundWrapper $backgroundColor={theme.palette.background.main}>
      <Layer>
        <BackgroundSVG color={theme.palette.background.layers.mainBg} />
      </Layer>
      <Layer>
        <StarsSVG color={theme.palette.background.layers.stars} />
      </Layer>
      <Layer style={{ x: transX4, y: transY4 }}>
        <CloudBackSVG color={theme.palette.background.layers.cloudBack} />
      </Layer>
      <Layer style={{ x: transX3, y: transY3 }}>
        <CloudMiddleSVG color={theme.palette.background.layers.cloudMiddle} />
      </Layer>
      <Layer style={{ x: transX2, y: transY2 }}>
        <CloudRightSVG color={theme.palette.background.layers.cloudRight} />
      </Layer>
      <Layer style={{ x: transX1, y: transY1 }}>
        <CloudLeftSVG color={theme.palette.background.layers.cloudLeft} />
      </Layer>
    </BackgroundWrapper>
  );
}

export default Background;
