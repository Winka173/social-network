import { createSlice } from "@reduxjs/toolkit";

const toggleNotificationSlice = createSlice({
  name: "toggleNotification",
  initialState: { showNotification: false },
  reducers: {
    toggle(state) {
      state.showNotification = !state.showNotification;
    },
  },
});

export const toggleNotificationActions = toggleNotificationSlice.actions;
export const toggleNotificationReducer = toggleNotificationSlice.reducer;
export default toggleNotificationSlice;
