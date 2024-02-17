import styled from "styled-components";
import ThemeSwitcher from "../features/theme/ThemeSwitcher";
import PixelSizeSwitcher from "../features/pixelSize/PixelSizeSwitcher";
import LanguageSwitcher from "../features/language/LanguageSwitcher";

const AppBarRoot = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  zIndex: theme.zIndex.appBar,

  [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
    padding: theme.spacing(theme.componentsGapFactor - 2),
  },
}));

const AppBarContainer = styled.div(({ theme }) => ({
  minWidth: `${theme.breakpoints.min}px`,
  maxWidth: `${theme.breakpoints.max}px`,
  padding: `${theme.spacing(theme.componentsGapFactor)}`,
  margin: `0 auto`,
  width: `100%`,
  display: "flex",
  justifyContent: "flex-end",

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
      <AppBarContainer>
        <Controls>
          <ThemeSwitcher />
          <PixelSizeSwitcher />
          <LanguageSwitcher />
        </Controls>
      </AppBarContainer>
    </AppBarRoot>
  );
}

export default AppBar;
