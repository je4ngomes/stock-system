import firebase from 'firebase';
import {
    EVENT_CREATE_PROGRESS,
    EVENT_UPDATE_PROGRESS,
    EVENT_DELETE_PROGRESS,
    EVENT_FETCH_PROGRESS,
    EVENT_CREATED,
    EVENT_DELETED,
    EVENTS_FETCHED,
    EVENT_UPDATED,
    EVENT_ERROR
} from '../types';
import { errorPayload } from '../../utils/utils';

export const createEvent = event => dispatch => {
    dispatch({ type: EVENT_CREATE_PROGRESS });

    firebase.firestore().collection('events').doc().set({
        ...event,
        launched: false,
        timestamp: +new Date()
    })
    .then(() => dispatch({ type: EVENT_CREATED }))
    .catch(e => dispatch({ type: EVENT_ERROR, payload: errorPayload('create', e.message) }));
};

export const updateEvent = event => dispatch => {
    dispatch({ type: EVENT_UPDATE_PROGRESS });

    firebase.firestore().collection('events').doc().set({
        ...event,
        timestamp: +new Date()
    })
    .then(() => dispatch({ type: EVENT_UPDATED }))
    .catch(e => dispatch({ type: EVENT_ERROR, payload: errorPayload('update', e.message) }));
};

export const deleteEvent = eventId => dispatch => {
    dispatch({ type: EVENT_DELETE_PROGRESS });

    firebase.firestore().collection('events').doc(eventId).delete()
        .then(() => dispatch({ type: EVENT_DELETED }))
        .catch(e => dispatch({ type: EVENT_ERROR, payload: errorPayload('delete', e.message) }));
};

export const fetchEventPaginated = (startAfter, status) => dispatch => {
    dispatch({ type: EVENT_FETCH_PROGRESS });
    
    firebase.firestore()
        .collection('events')
        .orderBy('timestamp')
        .startAfter(startAfter)
        .where('launched', '==', status)
        .limit(5)
        .get()
        .then(({ docs }) => {
            dispatch({ type: EVENTS_FETCHED, payload: docs.map(doc => doc.data()) })
        })
        .catch(e => dispatch({ type: EVENT_ERROR, payload: errorPayload('fetch', e.message) }));
};