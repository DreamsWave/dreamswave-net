import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import pixelSizeReducer from "./features/pixelSize/pixelSizeSlice";
import languageReducer from "./features/language/languageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    pixelSize: pixelSizeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
