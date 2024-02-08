import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import cloudBackImage from "../assets/images/hero/cloud-back.png";
import cloudLeftImage from "../assets/images/hero/cloud-left.png";
import cloudMiddleImage from "../assets/images/hero/cloud-middle.png";
import cloudRightImage from "../assets/images/hero/cloud-right.png";
import planetImage from "../assets/images/hero/planet.png";
import starsImage from "../assets/images/hero/stars.png";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import { getAspectRatio, getWindowDimensions } from "../utils";

const aspectRatioParams = {
  maxAspectRatio: 2,
  minAspectRatio: 0.5,
  fullScreenWidth: 1920,
  mobileWidth: 480,
};

const DepressionWrapper = styled(animated.div)<{ aspectRatio: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  aspect-ratio: ${({ aspectRatio }) => (aspectRatio ? aspectRatio : "2/1")};
  overflow: hidden;

  // & > * {
  //   position: absolute;
  //   width: 2560px;
  //   height: 1440px;
  // }
`;

const Layer = styled(animated.div)<{
  zIndex: number;
  imgSrc: string;
  height: number;
  width: number;
}>`
  height: 100%;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex};
  position: absolute;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center center;
  background-size: ${({ width }) => (width ? width : 2560)}px;
`;

function Parallax() {
  const [ref, bounds] = useMeasure();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [aspectRatio, setAspectRatio] = useState(
    `${getAspectRatio({
      ...aspectRatioParams,
      currentWidth: getWindowDimensions().width,
    })}/1`
  );

  useEffect(() => {
    function handleResize() {
      setAspectRatio(
        `${getAspectRatio({
          ...aspectRatioParams,
          currentWidth: getWindowDimensions().width,
        })}/1`
      );
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parallaxLevel1 = useSpring({
    // x: -(mouseX / 100),
    y: -(mouseY / 10),
  });
  const parallaxLevel2 = useSpring({
    // x: -(mouseX / 200),
    y: -(mouseY / 20),
  });
  const parallaxLevel3 = useSpring({
    // x: -(mouseX / 300),
    y: -(mouseY / 30),
  });
  const parallaxLevel4 = useSpring({
    // x: -(mouseX / 400),
    y: -(mouseY / 40),
  });
  const parallaxLevel5 = useSpring({
    // x: -(mouseX / 500),
    y: -(mouseY / 100),
  });
  return (
    <DepressionWrapper
      ref={ref}
      onMouseMove={(e) => {
        setMouseX(e.clientX - bounds.x - bounds.width / 2);
        setMouseY(e.clientY - bounds.y - bounds.height / 2);
      }}
      aspectRatio={aspectRatio}
    >
      <Layer
        style={{ ...parallaxLevel5 }}
        imgSrc={starsImage}
        zIndex={1}
        height={1440}
        width={1920}
      />
      <Layer
        style={{ ...parallaxLevel5 }}
        imgSrc={planetImage}
        zIndex={2}
        height={1440}
        width={1920}
      />
      <Layer
        style={{ ...parallaxLevel4 }}
        imgSrc={cloudBackImage}
        zIndex={3}
        height={1440}
        width={1920}
      />
      <Layer
        style={{ ...parallaxLevel3 }}
        imgSrc={cloudMiddleImage}
        zIndex={4}
        height={1440}
        width={1920}
      />
      <Layer
        style={{ ...parallaxLevel2 }}
        imgSrc={cloudRightImage}
        zIndex={5}
        height={1440}
        width={1920}
      />
      <Layer
        style={{ ...parallaxLevel1 }}
        imgSrc={cloudLeftImage}
        zIndex={6}
        height={1440}
        width={1920}
      />
    </DepressionWrapper>
  );
}

export default Parallax;
