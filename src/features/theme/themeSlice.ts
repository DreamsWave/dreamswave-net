import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ThemeImages, ThemesImages } from "../../types";
import cloudBackImage from "../../assets/images/hero/cloud-back.png";
import cloudLeftImage from "../../assets/images/hero/cloud-left.png";
import cloudMiddleImage from "../../assets/images/hero/cloud-middle.png";
import cloudRightImage from "../../assets/images/hero/cloud-right.png";
import starsImage from "../../assets/images/hero/stars.png";
import darkCloudBackImage from "../../assets/images/hero/dark/cloud-back.png";
import darkCloudLeftImage from "../../assets/images/hero/dark/cloud-left.png";
import darkCloudMiddleImage from "../../assets/images/hero/dark/cloud-middle.png";
import darkCloudRightImage from "../../assets/images/hero/dark/cloud-right.png";
import darkStarsImage from "../../assets/images/hero/dark/stars.png";

export const themeImages: ThemesImages = {
  light: {
    cloudBack: cloudBackImage,
    cloudLeft: cloudLeftImage,
    cloudMiddle: cloudMiddleImage,
    cloudRight: cloudRightImage,
    stars: starsImage,
  },
  dark: {
    cloudBack: darkCloudBackImage,
    cloudLeft: darkCloudLeftImage,
    cloudMiddle: darkCloudMiddleImage,
    cloudRight: darkCloudRightImage,
    stars: darkStarsImage,
  },
};

let isDarkThemeFromLocalStorage: boolean | null = null;
try {
  isDarkThemeFromLocalStorage = localStorage.getItem("theme") === "dark";
} catch (error) {
  console.error("Failed to access localStorage:", error);
}

export interface ThemeState {
  isDarkTheme: boolean;
  isLoading: boolean;
  images: ThemeImages;
}

const initialState: ThemeState = {
  isDarkTheme:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : isDarkThemeFromLocalStorage !== null
      ? isDarkThemeFromLocalStorage
      : false,
  isLoading: true,
  images: {
    cloudBack: "",
    cloudLeft: "",
    cloudMiddle: "",
    cloudRight: "",
    stars: "",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("theme", state.isDarkTheme ? "dark" : "light");
    },
    setImages: (state, action: PayloadAction<ThemeImages>) => {
      state.images = action.payload;
    },
  },
});

export const { startLoading, finishLoading, setImages, toggleTheme } =
  themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
