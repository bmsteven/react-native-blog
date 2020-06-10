import {SET_ERROR, POSTS_LOADED,POST_LOADED, LOADING} from "../types"

const initialState = {
    posts: null,
    post: null,
    loading: false,
    message: null,
    error: null
}

const data = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case POSTS_LOADED:
            return {
                ...state,
                loading: false,
                posts: payload
            }
        case POST_LOADED :
            return {
                ...state,
                loading: false,
                post: payload
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default data