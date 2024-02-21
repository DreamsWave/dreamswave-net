import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPixelSize, setPixelSize } from "./pixelSizeSlice";
import IconButton from "../../components/IconButton";
import PixelSizeIcon from "../../components/PixelSizeIcon";

function PixelSizeSwitcher() {
  const { pixelSize, availablePixelSizes } = useAppSelector(selectPixelSize);
  const dispatch = useAppDispatch();

  const switchPixelSize = async () => {
    const currentIndex = availablePixelSizes.indexOf(pixelSize);
    const nextIndex = (currentIndex + 1) % availablePixelSizes.length;
    const newPixelSize = availablePixelSizes[nextIndex];
    dispatch(setPixelSize(newPixelSize));
  };

  return (
    <IconButton onClick={() => switchPixelSize()}>
      <PixelSizeIcon size="small" />
    </IconButton>
  );
}

export default PixelSizeSwitcher;
