import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
};
const themeReducer = createSlice({
  initialState,
  name: "theme",
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export default themeReducer.reducer;
export const { setMode } = themeReducer.actions;
