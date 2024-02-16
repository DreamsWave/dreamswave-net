import styled from "styled-components";
import PixelSizeSwitcher from "../features/pixelSize/PixelSizeSwitcher";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";
import LanguageSwitcher from "../features/language/LanguageSwitcher";

const ControlsRoot = styled.div(({ theme }) => ({
  display: "flex",
  gap: "10px",
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: theme.zIndex.appBar,
}));

function Controls() {
  return (
    <ControlsRoot>
      <ThemeSwitcher />
      <PixelSizeSwitcher />
      <LanguageSwitcher />
    </ControlsRoot>
  );
}

export default Controls;
