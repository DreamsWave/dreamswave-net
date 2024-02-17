import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectLanguage, toggleLanguage } from "./languageSlice";
import { useState } from "react";
import IconButton from "../../components/IconButton";
import SVGIcon from "../../components/SVGIcon";

function LanguageSwitcher() {
  const { languageType } = useAppSelector(selectLanguage);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const switchLanguage = async () => {
    dispatch(toggleLanguage());
  };

  return (
    <IconButton
      onClick={() => switchLanguage()}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      aria-label={
        languageType === "en" ? "Сменить на русский язык" : "Switch to english"
      }
    >
      {languageType === "en" ? (
        <SVGIcon
          size="small"
          iconName="lang-en"
          fill={isMouseOver ? theme.palette.icon.dark : theme.palette.icon.main}
        />
      ) : (
        <SVGIcon
          size="small"
          iconName="lang-ru"
          fill={isMouseOver ? theme.palette.icon.dark : theme.palette.icon.main}
        />
      )}
    </IconButton>
  );
}

export default LanguageSwitcher;
