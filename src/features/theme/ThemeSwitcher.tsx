import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTheme, setTheme } from "./themeSlice";

const ThemeSwitcherWrapper = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 15;
  color: #333;
  background: #fff;
`;

function ThemeSwitcher() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const switchTheme = () => {
    dispatch(setTheme(theme.currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeSwitcherWrapper onClick={switchTheme}>
      Switch theme
    </ThemeSwitcherWrapper>
  );
}

export default ThemeSwitcher;
