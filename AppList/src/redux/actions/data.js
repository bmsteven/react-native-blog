import axios from "axios"
import {LOADING, POSTS_LOADED, POST_LOADED, SET_ERROR} from "../types"

export const getPosts = () => async dispatch => {
    dispatch({
        type: LOADING
    })
    axios.get("https://us-central1-bmsteven-4db5f.cloudfunctions.net/api/posts")
    .then((res) => {
        dispatch({
          type: POSTS_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err.response.data
        });
      });
}