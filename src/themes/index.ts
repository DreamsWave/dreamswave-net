import light from "./light";
import dark from "./dark";
import { ThemeType, Themes } from "../types";

const themes: Themes = { light, dark };

export const createTheme = (themeType: ThemeType, pixelSize: number) => {
  const baseTheme = themes[themeType];

  return {
    ...baseTheme,
    pixelSize,
    spacing: (factor: number) => `${factor * pixelSize}px`,
  };
};

export default themes;
