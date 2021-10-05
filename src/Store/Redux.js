import { createStore } from "redux";

const initialState = { darkTheme: false };

const darkThemeReducer = (state = initialState, action) => {
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
