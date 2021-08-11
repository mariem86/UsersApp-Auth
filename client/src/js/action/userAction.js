import axios from "axios";
import { configToken } from "./authAction";
import {
  GET_USERS,
  LOADING_USERS_FAIL,
  LOAD_USERS_SUCCESS,
  DELETE_USER,
  EDIT_USER,
  GET_USER_ID
} from "../const/ActionType";

//Get USERS
export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS
  });
  try {
    const res = await axios.get("/api/users/");
    dispatch({
      type: LOAD_USERS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
  }
};
//DELETE USER
export const deleteUser = id => async dispatch => {
  const config = configToken();
  try {
    await axios.delete(`/api/users/deleteUser/${id}`, config);
    dispatch(getUsers());
  } catch (error) {
    alert(error.response.data);
  }
};

//Edite USER
export const editeUser = (id,UpdateUser) => async dispatch => {
  const config = configToken();
  try {
    await axios.put(`/api/users/editUser/${id}`,UpdateUser, config);
    dispatch(getUsers());
  } catch (error) {
    alert(error.response.data);
  }
};
//get profile by id
export const getUserbyid = (Id) => async (dispatch) => {
  const config = configToken();
  try {
    
    const res = await axios.get('/api/users/user/' + Id,config);
    dispatch({ type:   GET_USER_ID, 
              payload: res.data });
  } catch (error) {
    alert(error.response.data);
  }
};
