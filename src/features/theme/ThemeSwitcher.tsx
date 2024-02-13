import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTheme, toggleTheme } from "./themeSlice";
import { PIXEL_SIZE } from "../../constants";
import { useState } from "react";
import { MoonSVG, SunSVG } from "../../components/SVGIcons";

const ThemeSwitcherWrapper = styled.button`
  position: absolute;
  right: 10px;
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

function ThemeSwitcher() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const switchTheme = async () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeSwitcherWrapper
      onClick={() => switchTheme()}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      aria-label={
        theme.isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme.isDarkTheme ? (
        <SunSVG color={isMouseOver ? "#6e96a6" : "#94b5bc"} />
      ) : (
        <MoonSVG color={isMouseOver ? "#6e96a6" : "#94b5bc"} />
      )}
    </ThemeSwitcherWrapper>
  );
}

export default ThemeSwitcher;
