import {
    PRODUCT_PROGRESS,
    PRODUCT_CREATED,
    PRODUCT_DELETED,
    PRODUCT_UPDATED,
    PRODUCT_ERROR,
    PRODUCT_DELETE_PROGRESS,
    PRODUCT_FETCH_PROGRESS,
    PRODUCTS_FETCHED
} from '../types';

const initState = {
    error: null,
    loading: false,
    deleteLoading: false,
    products: [],
    isProductPagEmpty: 1,
    fetch_progress: false,
    product: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case PRODUCT_PROGRESS:
            return { ...state, loading: true };
        case PRODUCT_FETCH_PROGRESS:
            return { ...state, fetch_progress: true }
        case PRODUCTS_FETCHED:
            return { 
                ...state, 
                fetch_progress: false,
                isProductPagEmpty: action.payload.length, 
                products: [...state.products, ...action.payload]
            }
        case PRODUCT_DELETE_PROGRESS:
            return { ...state, deleteLoading: true };
        case PRODUCT_CREATED:
            return { ...state, loading: false, error: null };
        case PRODUCT_DELETED:
            return { ...state, deleteLoading: false, error: null };
        case PRODUCT_UPDATED:
            return { ...state, loading: false, error: null };
        case PRODUCT_ERROR:
            return { ...state, deleteLoading: false, loading: false, error: action.payload };
        default:
            return state;    
    }
}