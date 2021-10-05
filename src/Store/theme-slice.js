import { createSlice } from "@reduxjs/toolkit";

const toggleThemeSlice = createSlice({
  name: "toggleTheme",
  initialState: { theme: "light" },
  reducers: {
    lightTheme(state) {
      state.theme = "light";
    },
    darkTheme(state) {
      state.theme = "dark";
    },
  },
});

export const toggleThemeActions = toggleThemeSlice.actions;
export const toggleThemeReducer = toggleThemeSlice.reducer;
export default toggleThemeSlice;
