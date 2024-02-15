import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ThemeType } from "../../types";

let isDarkThemeFromLocalStorage: boolean | null = null;
try {
  isDarkThemeFromLocalStorage = localStorage.getItem("theme") === "dark";
} catch (error) {
  console.error("Failed to access localStorage:", error);
}

export type ThemeState = {
  themeType: ThemeType;
};

const initialState: ThemeState = {
  themeType:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : isDarkThemeFromLocalStorage !== null
      ? isDarkThemeFromLocalStorage
        ? "dark"
        : "light"
      : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeType = state.themeType === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.themeType);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
