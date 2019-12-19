import React, { useState } from 'react';
import { Calendar, Icon, Tooltip } from 'antd';

import CreateEventModal from './CreateEventModal';
import ViewEventsModal from './ViewEventsModal';

function getEvent(value) {
  switch (value.date()) {
    case 8:
      return { hasEvent: true };
    case 10:
      return { hasEvent: true };
    case 15:
      return { hasEvent: true };
    default: return { hasEvent: false };
  }
}

function dateCellRender(value) {
  const event = getEvent(value);

  return (
    <div className='events'>
      {event.hasEvent ? (
            <Tooltip placement='top' title='Click para visualizar os eventos'>
                <Icon className='event' type='clock-circle'/>
            </Tooltip>
        ) : null
      }
    </div>
  );
}


const CalendarEvent = () => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(null);

    const handleSelected = (value) => {
        setDate(value._d);
        setShowModal(true);
    };

    return (
        <>
        <Calendar 
            onSelect={handleSelected}
            dateCellRender={dateCellRender} />
        {/* <CreateEventModal showModal={[showModal, setShowModal]} date={date} /> */}
        <ViewEventsModal showModal={[showModal, setShowModal]}/>
        </>
    );
}

export default CalendarEvent;