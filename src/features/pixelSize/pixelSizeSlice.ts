import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type PixelSizeState = {
  pixelSize: number;
  availablePixelSizes: number[];
};

const initialState: PixelSizeState = {
  pixelSize: 4,
  availablePixelSizes: [3, 4, 5],
};

const pixelSizeSlice = createSlice({
  name: "pixelSize",
  initialState,
  reducers: {
    setPixelSize: (state, action) => {
      state.pixelSize = action.payload;
    },
  },
});

export const { setPixelSize } = pixelSizeSlice.actions;

export const selectPixelSize = (state: RootState) => state.pixelSize;

export default pixelSizeSlice.reducer;
