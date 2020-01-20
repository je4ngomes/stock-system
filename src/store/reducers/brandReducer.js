import { 
    BRAND_CREATED,
    BRAND_DELETED,
    BRAND_PROGRESS,
    BRAND_ERROR 
} from "../types";

const initState = {
    loading: false,
    error: null
};

export default (state = initState, action) => {

    switch(action.type) {
        case BRAND_PROGRESS:
            return { ...state, loading: true };
        case BRAND_CREATED:
            return { ...state, loading: false };
        case BRAND_DELETED:
            return { ...state, loading: false };
        case BRAND_ERROR:
            return { ...state, loading: false, error: action.payload.message }
        default: 
            return state;
    }
    
}