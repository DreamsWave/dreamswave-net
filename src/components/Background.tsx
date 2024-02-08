import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import cloudBackImage from "../assets/images/hero/cloud-back.png";
import cloudLeftImage from "../assets/images/hero/cloud-left.png";
import cloudMiddleImage from "../assets/images/hero/cloud-middle.png";
import cloudRightImage from "../assets/images/hero/cloud-right.png";
import starsImage from "../assets/images/hero/stars.png";
import darkCloudBackImage from "../assets/images/hero/dark/cloud-back.png";
import darkCloudLeftImage from "../assets/images/hero/dark/cloud-left.png";
import darkCloudMiddleImage from "../assets/images/hero/dark/cloud-middle.png";
import darkCloudRightImage from "../assets/images/hero/dark/cloud-right.png";
import darkStarsImage from "../assets/images/hero/dark/stars.png";
import useMeasure from "react-use-measure";
import styled from "styled-components";

const BackgroundWrapper = styled(animated.div)<{ theme: "light" | "dark" }>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => (theme === "light" ? "#dfeded" : "#2e3e58")};
  transition: background 0.3s ease-in-out;
`;

const Layer = styled(animated.div)<{
  imgSrc: string;
}>`
  height: calc(100% + 60px);
  width: calc(100% + 60px);
  top: -30px;
  left: -30px;
  position: absolute;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: cover;
  transition: background 0.3s ease-in-out;
`;

type BackgroundProps = {
  theme?: "light" | "dark";
};
function Background({ theme = "light" }: BackgroundProps) {
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
      theme={theme}
    >
      {theme === "light" && (
        <>
          <Layer imgSrc={starsImage} />
          <Layer style={{ ...parallaxLevel4 }} imgSrc={cloudBackImage} />
          <Layer style={{ ...parallaxLevel3 }} imgSrc={cloudMiddleImage} />
          <Layer style={{ ...parallaxLevel2 }} imgSrc={cloudRightImage} />
          <Layer style={{ ...parallaxLevel1 }} imgSrc={cloudLeftImage} />
        </>
      )}
      {theme === "dark" && (
        <>
          <Layer imgSrc={darkStarsImage} />
          <Layer style={{ ...parallaxLevel4 }} imgSrc={darkCloudBackImage} />
          <Layer style={{ ...parallaxLevel3 }} imgSrc={darkCloudMiddleImage} />
          <Layer style={{ ...parallaxLevel2 }} imgSrc={darkCloudRightImage} />
          <Layer style={{ ...parallaxLevel1 }} imgSrc={darkCloudLeftImage} />
        </>
      )}
    </BackgroundWrapper>
  );
}

export default Background;
