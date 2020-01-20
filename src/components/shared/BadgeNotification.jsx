import React from 'react';
import { Badge } from '@material-ui/core';

const BadgeNotification = ({ children }) => {
    return (
        <Badge color='secondary' variant='dot' invisible={false}>
            {children}
        </Badge>
    );
};

export default BadgeNotification;