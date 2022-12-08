import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};
const globalReducer = createSlice({
  initialState,
  name: "global",
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export default globalReducer.reducer;
export const { setMode } = globalReducer.actions;
