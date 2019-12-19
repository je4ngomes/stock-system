import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types";

const initState = {
    error: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return { ...state, error: null };
        case LOGIN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}