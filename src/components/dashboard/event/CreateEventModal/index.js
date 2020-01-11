import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateEventModal from './CreateEventModal';
import { createEvent } from '../../../../store/actions/eventAction';
import { message } from 'antd';

export default () => {
    const dispatch = useDispatch();
    const {
        isCreating,
        createError
    } = useSelector(state => ({
        isCreating: state.event.isCreating,
        createError: state.event.error.create
    }));

    const handleSubmit = vals => (
        dispatch(
            createEvent({
                ...vals,
                date: {
                    start: vals.date[0],
                    end: vals.date[1]
                }
            })
        )
    );

    useEffect(() => {
        if (createError)
            message.error(createError, 2);
    }, [createError]);

    return (
        <CreateEventModal submit={handleSubmit}/>
    );
};