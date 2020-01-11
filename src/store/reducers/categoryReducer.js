import { 
    CATEGORY_CREATED,
    CATEGORY_DELETED,
    CATEGORY_PROGRESS,
    CATEGORY_ERROR 
} from "../types";

const initState = {
    loading: false,
    error: null
};

export default (state = initState, action) => {

    switch(action.type) {
        case CATEGORY_PROGRESS:
            return { ...state, loading: true };
        case CATEGORY_CREATED:
            return { ...state, loading: false };
        case CATEGORY_DELETED:
            return { ...state, loading: false };
        case CATEGORY_ERROR:
            return { ...state, loading: false, error: action.payload.message }
        default: 
            return state;
    }
    
}