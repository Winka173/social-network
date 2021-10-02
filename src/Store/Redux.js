import { createStore } from "redux";

const darkThemeReducer = (state = { darkTheme: false }, action) => {
  if (action.type === "theme") {
    return {
      ...state,
      darkTheme: !state.darkTheme,
    };
  }

  return state;
};

const store = createStore(darkThemeReducer);

export default store;
