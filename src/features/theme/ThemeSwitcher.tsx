import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTheme, toggleTheme } from "./themeSlice";
import { useState } from "react";
import IconButton from "../../components/IconButton";
import SVGIcon from "../../components/SVGIcon";

function ThemeSwitcher() {
  const { themeType } = useAppSelector(selectTheme);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const switchTheme = async () => {
    dispatch(toggleTheme());
  };

  return (
    <IconButton
      onClick={() => switchTheme()}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      aria-label={
        themeType === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {themeType === "dark" ? (
        <SVGIcon
          size="small"
          iconName="sun"
          fill={isMouseOver ? theme.palette.icon.dark : theme.palette.icon.main}
        />
      ) : (
        <SVGIcon
          size="small"
          iconName="moon"
          fill={isMouseOver ? theme.palette.icon.dark : theme.palette.icon.main}
        />
      )}
    </IconButton>
  );
}

export default ThemeSwitcher;
