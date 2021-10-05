import { configureStore } from "@reduxjs/toolkit";
import { toggleThemeReducer } from "./theme-slice";
import { toggleNotificationReducer } from "./notification-slice";

const store = configureStore({
  reducer: {
    theme: toggleThemeReducer,
    notification: toggleNotificationReducer,
  },
});
export default store;

// old redux create
// import { createStore } from "redux";

// const darkThemeReducer = (state = { darkTheme: false }, action) => {
//   if (action.type === "theme") {
//     return {
//       ...state,
//       darkTheme: !state.darkTheme,
//     };
//   }

//   return state;
// };

// const store = createStore(darkThemeReducer);

// export default store;
