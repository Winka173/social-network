import { createSlice } from "@reduxjs/toolkit";

const toggleNotificationSlice = createSlice({
  name: "toggleNotification",
  initialState: {},
  reducers: {
    createNotification(state, action) {
      state.notification = {
        userImg: action.payload.userImg,
        userName: action.payload.userName,
        description: action.payload.description,
      };
    },
    clearNotification(state) {
      state.notification = {};
    },
  },
});

export const toggleNotificationActions = toggleNotificationSlice.actions;
export const toggleNotificationReducer = toggleNotificationSlice.reducer;
export default toggleNotificationSlice;
