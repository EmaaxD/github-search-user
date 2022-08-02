import { LOADING_USER, SET_USER, ERROR_USER } from "../types";

import { UserReducerAction } from "../../interfaces";

export const initialState = {
  loading: true,
  user: null,
  error: null,
};

export const userReducer = (
  state = initialState,
  actions: UserReducerAction
) => {
  switch (actions.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_USER:
      return {
        ...state,
        user: actions.payload,
        loading: false,
        error: null,
      };

    case ERROR_USER:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };

    default:
      return state;
  }
};
