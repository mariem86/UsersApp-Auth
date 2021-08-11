import {
    GET_USERS,
    LOAD_USERS_SUCCESS,
    LOADING_USERS_FAIL,
    DELETE_USER,
    EDIT_USER,
    GET_USER_ID
  } from "../const/ActionType";
  
  const initialState = {
    usersList: [],
    isLoading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return { ...state, isLoading: true };
        case GET_USER_ID:
          return {...state, isLoading: false, usersList: action.payload };
      case LOAD_USERS_SUCCESS:
        return { ...state, isLoading: false, usersList: action.payload };
      default:
        return state;
    };
    
    
  };
  