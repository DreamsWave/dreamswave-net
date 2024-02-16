import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { LanguageType } from "../../types";

let languageFromLocalStorage: LanguageType = "en";
try {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    languageFromLocalStorage = storedLanguage as LanguageType;
  }
} catch (error) {
  console.error("Failed to access localStorage:", error);
}

export type LanguageState = {
  languageType: LanguageType;
};

const initialState: LanguageState = {
  languageType: languageFromLocalStorage ? languageFromLocalStorage : "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.languageType = state.languageType === "en" ? "ru" : "en";
      localStorage.setItem("language", state.languageType);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;

export default languageSlice.reducer;
