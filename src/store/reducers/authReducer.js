import { 
    SIGNIN_SUCCESS, 
    SIGNIN_ERROR, 
    AUTH_PROGRESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNOUT_SUCCESS
} from "../types";

const initState = {
    error: null,
    isLoading: false
};

export default (state = initState, action) => {
    switch(action.type) {
        case AUTH_PROGRESS:
            return { ...state, isLoading: true }        
        case SIGNIN_SUCCESS:
            return { 
                ...state, 
                error: null, 
                isLoading: false 
            };
        case SIGNIN_ERROR:
            return { 
                ...state, 
                isLoading: false, 
                error: { message: 'Usuário ou senha incorretos.' } 
            };
        case SIGNUP_SUCCESS:
            return { 
                ...state, 
                error: null, 
                isLoading: false 
            };
        case SIGNUP_ERROR:
            return { 
                ...state, 
                error: action.payload, 
                isLoading: false 
            };
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false
            };
        default:
            return state;
    }
}