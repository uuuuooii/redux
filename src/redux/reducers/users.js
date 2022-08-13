import {
  GET_USERS_FAIL,
  //   GET_USERS_FULFILLED,
  //   GET_USERS_PENDING,
  //   GET_USERS_REJECTED,
  GET_USERS_STRAT,
  GET_USERS_SUCCES,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
  if (action.type === GET_USERS_STRAT) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCES) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      data: action.error,
    };
  }

  return state;
}
