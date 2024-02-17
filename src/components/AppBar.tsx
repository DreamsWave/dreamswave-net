import styled from "styled-components";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";
import PixelSizeSwitcher from "../features/pixelSize/PixelSizeSwitcher";
import LanguageSwitcher from "../features/language/LanguageSwitcher";

const AppBarRoot = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(theme.componentsGapFactor),
  zIndex: theme.zIndex.appBar,
  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    padding: theme.spacing(theme.componentsGapFactor - 2),
  },
}));

const Controls = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

function AppBar() {
  return (
    <AppBarRoot>
      <Controls>
        <ThemeSwitcher />
        <PixelSizeSwitcher />
        <LanguageSwitcher />
      </Controls>
    </AppBarRoot>
  );
}

export default AppBar;
