import axios from "axios";

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../actionTypes/notesConstants";

const url = "http://localhost:5000/users/notes";

export const getPosts = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(url, config);
    console.log("ACTION:", data);

    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (title, body) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(url, { title, body }, config);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${url}/${id}`,

      config
    );
    const action = { type: UPDATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("error");
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`${url}/${id}`, config);
    const action = { type: DELETE, payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
