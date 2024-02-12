import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  finishLoading,
  selectTheme,
  setImages,
  startLoading,
  toggleTheme,
} from "./themeSlice";
import { IMAGES, PIXEL_SIZE } from "../../constants";
import { ThemeImages } from "../../types";
import { useCallback, useEffect, useState } from "react";
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

  const loadThemeImages = useCallback(
    async (isDarkTheme: boolean) => {
      const theme = isDarkTheme ? "dark" : "light";
      const imageUrls = Object.values(IMAGES[theme]);
      const loadedImages: { [key: string]: string } = {};
      await Promise.all(
        imageUrls.map(
          (url) =>
            new Promise((resolve, reject) => {
              const imageLoader = new Image();
              imageLoader.src = url;
              imageLoader.onload = () => {
                loadedImages[url] = imageLoader.src;
                resolve(null);
              };
              imageLoader.onerror = reject;
            })
        )
      );
      const images: ThemeImages = {
        cloudBack: loadedImages[IMAGES[theme].cloudBack],
        cloudLeft: loadedImages[IMAGES[theme].cloudLeft],
        cloudMiddle: loadedImages[IMAGES[theme].cloudMiddle],
        cloudRight: loadedImages[IMAGES[theme].cloudRight],
        stars: loadedImages[IMAGES[theme].stars],
      };
      dispatch(setImages(images));

      return loadedImages;
    },
    [dispatch]
  );

  const switchTheme = async () => {
    dispatch(startLoading());
    await loadThemeImages(!theme.isDarkTheme);
    dispatch(toggleTheme());
    dispatch(finishLoading());
  };

  useEffect(() => {
    loadThemeImages(theme.isDarkTheme);
    dispatch(finishLoading());
  }, [dispatch, loadThemeImages, theme.isDarkTheme]);

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
