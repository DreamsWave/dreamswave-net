import { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";
import { useAppSelector } from "../hooks";
import { selectPixelSize } from "../features/pixelSize/pixelSizeSlice";

const StarsRoot = styled.div``;

const StarComponent = styled(animated.div).attrs<{
  $x: number;
  $y: number;
  $size: number;
}>((props) => ({
  style: {
    position: "absolute",
    left: `${props.$x}px`,
    top: `${props.$y}px`,
    width: `${props.$size}px`,
    height: `${props.$size}px`,
    backgroundColor: props.theme.palette.background.layers.stars,
  },
}))``;

type StarType = {
  x: number;
  y: number;
  opacity: number;
  size: number;
};

type StarProps = StarType & {
  key: number;
};

const Star: React.FC<StarProps> = ({ x, y, opacity, size }) => {
  const props = useSpring({
    from: { opacity: opacity },
    to: { opacity: opacity > 0.5 ? 0.1 : 1 },
    config: { duration: Math.random() * 3000 + 1000 },
    loop: { reverse: true },
  });

  return <StarComponent $x={x} $y={y} $size={size} style={props} />;
};

type StarsProps = {
  count?: number;
};
const Stars = ({ count = 30 }: StarsProps) => {
  const [stars, setStars] = useState<StarType[]>([]);
  const { pixelSize } = useAppSelector(selectPixelSize);

  useEffect(() => {
    const generateStars = (count: number) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        newStars.push({
          x: Math.round(Math.random() * window.innerWidth),
          y: Math.round(Math.random() * window.innerHeight),
          opacity: Math.random(),
          size: i < count / 6 ? pixelSize * 2 : pixelSize,
        });
      }
      setStars(newStars);
    };

    generateStars(count);

    const handleResize = () => {
      generateStars(count);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, pixelSize]);

  return (
    <StarsRoot>
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </StarsRoot>
  );
};

export default Stars;
