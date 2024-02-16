import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PIXEL_SIZE } from "../../constants";
import { useState } from "react";
import { MoonSVG } from "../../components/SVGIcons";
import { selectPixelSize, setPixelSize } from "./pixelSizeSlice";

const PixelSizeSwitcherWrapper = styled.button`
  position: absolute;
  right: 70px;
  top: 10px;
  z-index: 30;
  color: #94b5bc;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0;
  padding: ${PIXEL_SIZE}px;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: ${PIXEL_SIZE}px solid rgba(148, 181, 188, 1);
  }
`;

function PixelSizeSwitcher() {
  const { pixelSize, availablePixelSizes } = useAppSelector(selectPixelSize);
  const dispatch = useAppDispatch();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const switchPixelSize = async () => {
    const currentIndex = availablePixelSizes.indexOf(pixelSize);
    const nextIndex = (currentIndex + 1) % availablePixelSizes.length;
    const newPixelSize = availablePixelSizes[nextIndex];
    dispatch(setPixelSize(newPixelSize));
  };

  return (
    <PixelSizeSwitcherWrapper
      onClick={() => switchPixelSize()}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <MoonSVG color={isMouseOver ? "#6e96a6" : "#94b5bc"} />
    </PixelSizeSwitcherWrapper>
  );
}

export default PixelSizeSwitcher;
