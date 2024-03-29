import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import portfolio from "./portfoilo";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        portfolio,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
