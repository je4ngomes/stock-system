import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Button, Row, Col, Layout, Icon, Timeline } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import loaderSvg from '../../../assets/spinner.svg';
import EventCard from './EventCard';
import { fetchEventPaginated } from '../../../store/actions/eventAction';

const EventTimeline = ({ align, sort }) => {
    const status = align === 'left' ? false : true;

    useFirestoreConnect(() => ({ 
        collection: 'events',
        orderBy: ['timestamp', sort],
        limit: 5,
        where: [
            ['launched', '==', status]
        ] 
    }));
    const dispatch = useDispatch();
    const {
        isLoading,
        eventLength,
        isEventPagEmpty,
        events
    } = useSelector(({ firestore: { ordered }, event }) => {
        const stateObj = {
            events: [...(ordered.events || [null]), ...event.events],
            isLoading: event.isFetching
        };
        const eventLength = stateObj.events.length;

        return { 
            ...stateObj,
            isEventPagEmpty: event.isEventPagEmpty, 
            eventLength        
        }
    });


    const handleLoadMore = () => {
        dispatch(
            fetchEventPaginated(
                events[eventLength-1], 
                status
            )
        )
    };

    return (
        <div>
            <Timeline mode={align} pending='Aguardando Registro' reverse>
                {events.map(event => (
                    <Timeline.Item color="red">
                        <EventCard 
                            eventType={event.eventType}
                            title={event.name}
                            description={event.description}
                            launched={event.launched}
                            startDate={event.date.start}
                            endDate={event.date.end}
                            align={align} 
                        />
                    </Timeline.Item>
                ))}
            </Timeline>
            <div>
                {
                    (eventLength >= 5 && !!isEventPagEmpty) && (
                        <Button 
                            loading={isLoading}
                            shape='round' 
                            onClick={handleLoadMore}
                        >
                            Mostrar mais
                        </Button>
                    )
                }
            </div>                 
        </div>
    );
};

export default EventTimeline;
