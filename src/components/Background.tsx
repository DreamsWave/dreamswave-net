import { useSpring, animated } from "@react-spring/web";
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

  const parallaxLevel1 = useSpring({
    x: -(mouseX / 80),
    y: -(mouseY / 20),
  });
  const parallaxLevel2 = useSpring({
    x: -(mouseX / 120),
    y: -(mouseY / 30),
  });
  const parallaxLevel3 = useSpring({
    x: -(mouseX / 160),
    y: -(mouseY / 40),
  });
  const parallaxLevel4 = useSpring({
    x: -(mouseX / 400),
    y: -(mouseY / 100),
  });

  return (
    <BackgroundWrapper $backgroundColor={theme.palette.background.main}>
      <Layer>
        <BackgroundSVG color={theme.palette.background.layers.mainBg} />
      </Layer>
      <Layer>
        <StarsSVG color={theme.palette.background.layers.stars} />
      </Layer>
      <Layer style={{ ...parallaxLevel4 }}>
        <CloudBackSVG color={theme.palette.background.layers.cloudBack} />
      </Layer>
      <Layer style={{ ...parallaxLevel3 }}>
        <CloudMiddleSVG color={theme.palette.background.layers.cloudMiddle} />
      </Layer>
      <Layer style={{ ...parallaxLevel2 }}>
        <CloudRightSVG color={theme.palette.background.layers.cloudRight} />
      </Layer>
      <Layer style={{ ...parallaxLevel1 }}>
        <CloudLeftSVG color={theme.palette.background.layers.cloudLeft} />
      </Layer>
    </BackgroundWrapper>
  );
}

export default Background;
