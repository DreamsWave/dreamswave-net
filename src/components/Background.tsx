import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import useMeasure from "react-use-measure";
import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { selectTheme } from "../features/theme/themeSlice";

const BackgroundWrapper = styled(animated.div)<{ isdarktheme: boolean }>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${({ isdarktheme }) => (isdarktheme ? "#2e3e58" : "#dfeded")};
  transition: background 0.3s ease-in-out;
`;

const Layer = styled(animated.div)<{
  imgsrc: string;
}>`
  height: calc(100% + 60px);
  width: calc(100% + 60px);
  top: -30px;
  left: -30px;
  position: absolute;
  background-image: url(${({ imgsrc }) => imgsrc});
  background-position: center;
  background-size: cover;
  transition: background 0.3s ease-in-out;
`;

function Background() {
  const theme = useAppSelector(selectTheme);
  const [ref, bounds] = useMeasure();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

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
    <BackgroundWrapper
      ref={ref}
      onMouseMove={(e) => {
        setMouseX(e.clientX - bounds.x - bounds.width / 2);
        setMouseY(e.clientY - bounds.y - bounds.height / 2);
      }}
      isdarktheme={theme.isDarkTheme}
    >
      <Layer imgsrc={theme.images.stars} />
      <Layer style={{ ...parallaxLevel4 }} imgsrc={theme.images.cloudBack} />
      <Layer style={{ ...parallaxLevel3 }} imgsrc={theme.images.cloudMiddle} />
      <Layer style={{ ...parallaxLevel2 }} imgsrc={theme.images.cloudRight} />
      <Layer style={{ ...parallaxLevel1 }} imgsrc={theme.images.cloudLeft} />
    </BackgroundWrapper>
  );
}

export default Background;
