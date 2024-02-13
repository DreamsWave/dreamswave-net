import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

let isDarkThemeFromLocalStorage: boolean | null = null;
try {
  isDarkThemeFromLocalStorage = localStorage.getItem("theme") === "dark";
} catch (error) {
  console.error("Failed to access localStorage:", error);
}

export interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : isDarkThemeFromLocalStorage !== null
      ? isDarkThemeFromLocalStorage
      : false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("theme", state.isDarkTheme ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
