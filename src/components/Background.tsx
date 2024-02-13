import { useSpring, animated } from "@react-spring/web";
import styled, { useTheme } from "styled-components";
import { useAppSelector } from "../hooks";
import { selectTheme } from "../features/theme/themeSlice";
import {
  BackgroundSVG,
  CloudBackSVG,
  CloudLeftSVG,
  CloudMiddleSVG,
  CloudRightSVG,
  StarsSVG,
} from "./SVGBackground";
import { THEME } from "../types";

const BackgroundWrapper = styled(animated.div)<{ isdarktheme: string }>`
  --background-color: ${({ isdarktheme }) =>
    isdarktheme === "true" ? "#2e3e58" : "#dfeded"};

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
  const theme = useAppSelector(selectTheme);
  const styledTheme: THEME = useTheme();

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
    <BackgroundWrapper isdarktheme={theme.isDarkTheme.toString()}>
      <Layer>
        <BackgroundSVG color={styledTheme.palette.background.layers.mainBg} />
      </Layer>
      <Layer>
        <StarsSVG color={styledTheme.palette.background.layers.stars} />
      </Layer>
      <Layer style={{ ...parallaxLevel4 }}>
        <CloudBackSVG color={styledTheme.palette.background.layers.cloudBack} />
      </Layer>
      <Layer style={{ ...parallaxLevel3 }}>
        <CloudMiddleSVG
          color={styledTheme.palette.background.layers.cloudMiddle}
        />
      </Layer>
      <Layer style={{ ...parallaxLevel2 }}>
        <CloudRightSVG
          color={styledTheme.palette.background.layers.cloudRight}
        />
      </Layer>
      <Layer style={{ ...parallaxLevel1 }}>
        <CloudLeftSVG color={styledTheme.palette.background.layers.cloudLeft} />
      </Layer>
    </BackgroundWrapper>
  );
}

export default Background;
