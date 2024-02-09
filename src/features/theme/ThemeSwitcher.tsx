import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  finishLoading,
  selectTheme,
  setImages,
  startLoading,
  toggleTheme,
} from "./themeSlice";
import { IMAGES } from "../../constants";
import { ThemeImages } from "../../types";
import { useEffect } from "react";

const ThemeSwitcherWrapper = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 30;
  color: #333;
  background: #fff;
  cursor: pointer;
`;

function ThemeSwitcher() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const loadThemeImages = async (isDarkTheme: boolean) => {
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
  };

  const switchTheme = async () => {
    dispatch(startLoading());
    await loadThemeImages(!theme.isDarkTheme);
    dispatch(toggleTheme());
    dispatch(finishLoading());
  };

  useEffect(() => {
    loadThemeImages(theme.isDarkTheme);
    dispatch(finishLoading());
  }, []);

  return (
    <ThemeSwitcherWrapper onClick={() => switchTheme()}>
      {theme.isLoading ? "Loading" : "Switch theme"}
    </ThemeSwitcherWrapper>
  );
}

export default ThemeSwitcher;
