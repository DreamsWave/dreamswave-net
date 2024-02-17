import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type PixelSizeState = {
  pixelSize: number;
  availablePixelSizes: number[];
};

const initialPixelSize = localStorage.getItem("pixelSize")
  ? Number(localStorage.getItem("pixelSize"))
  : 4;

const initialState: PixelSizeState = {
  pixelSize: initialPixelSize,
  availablePixelSizes: [3, 4, 5],
};

const pixelSizeSlice = createSlice({
  name: "pixelSize",
  initialState,
  reducers: {
    setPixelSize: (state, action) => {
      state.pixelSize = action.payload;
      localStorage.setItem("pixelSize", action.payload.toString());
    },
  },
});

export const { setPixelSize } = pixelSizeSlice.actions;

export const selectPixelSize = (state: RootState) => state.pixelSize;

export default pixelSizeSlice.reducer;
