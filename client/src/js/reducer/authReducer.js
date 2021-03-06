import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    SET_LOADING,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS
  } from "../const/ActionType";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    isLoading: false,
    user: {},
    errors: {}
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
  
      case LOAD_USER_SUCCESS:
        return { ...state, user: action.payload, isAuth: true, isLoading: false };
  
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          ...action.payload, // {user : { name :"" , email:"" } , token : "" }
          isAuth: true,
          isLoading: false
        };
  
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case LOAD_USER_FAIL:
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          errors: action.payload
        };
      case LOGOUT:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuth: null,
          isLoading: false,
          user: {},
          errors: {}
        };
      case CLEAR_ERRORS:
        return { ...state, errors: {} };
      default:
        return state;
    }
  }
  