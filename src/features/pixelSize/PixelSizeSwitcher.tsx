import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useState } from "react";
import { selectPixelSize, setPixelSize } from "./pixelSizeSlice";
import { Theme } from "../../types";
import IconButton from "../../components/IconButton";
import SVGIcon from "../../components/SVGIcon";

function PixelSizeSwitcher() {
  const { pixelSize, availablePixelSizes } = useAppSelector(selectPixelSize);
  const dispatch = useAppDispatch();
  const theme: Theme = useTheme();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const switchPixelSize = async () => {
    const currentIndex = availablePixelSizes.indexOf(pixelSize);
    const nextIndex = (currentIndex + 1) % availablePixelSizes.length;
    const newPixelSize = availablePixelSizes[nextIndex];
    dispatch(setPixelSize(newPixelSize));
  };

  return (
    <IconButton
      onClick={() => switchPixelSize()}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <SVGIcon
        size="small"
        iconName="pixel-size"
        fill={isMouseOver ? theme.palette.icon.dark : theme.palette.icon.main}
      />
    </IconButton>
  );
}

export default PixelSizeSwitcher;
