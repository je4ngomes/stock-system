import {
    EVENT_CREATE_PROGRESS,
    EVENT_UPDATE_PROGRESS,
    EVENT_DELETE_PROGRESS,
    EVENT_FETCH_PROGRESS,
    EVENTS_FETCHED,
    EVENT_CREATED,
    EVENT_DELETED,
    EVENT_UPDATED,
    EVENT_ERROR
} from '../types';

const loadingErrorMap = {
    update: 'isUpdating',
    delete: 'isDeleting',
    fetch: 'isFetching',
    create: 'isCreating'
};

const initState = {
    error: {
        update: null,
        delete: null,
        fetch: null,
        create: null,
    },
    isCreating: false,
    isDeleting: false,
    isUpdating: false,
    isFetching: false,
    events: [],
    isEventPagEmpty: 1,
};

export default (state = initState, action) => {
    switch(action.type) {
        case EVENT_CREATE_PROGRESS:
            return { ...state, isCreating: true };
        case EVENT_DELETE_PROGRESS:
            return { ...state, isDeleting: true };
        case EVENT_UPDATE_PROGRESS:
            return { ...state, isUpdating: true };
        case EVENT_FETCH_PROGRESS:
            return { ...state, isFetching: true }
        case EVENTS_FETCHED:
            return { 
                ...state, 
                isFetching: false,
                isProductPagEmpty: action.payload.length, 
                products: [...state.events, ...action.payload]
            }
        case EVENT_CREATED:
            return { ...state, loading: false, error: null };
        case EVENT_DELETED:
            return { ...state, deleteLoading: false, error: null };
        case EVENT_UPDATED:
            return { ...state, loading: false, error: null };
        case EVENT_ERROR:
            return { 
                ...state, 
                [loadingErrorMap[action.payload.error]]: false, 
                error: { [action.payload.error]: action.payload.message } 
            };
        default:
            return state;    
    }
}