import React from 'react';
import { Badge } from '@material-ui/core';

const BadgeShoppingCart = ({ children }) => {
    return (
        <Badge color='secondary' badgeContent={2}>
            {children}
        </Badge>
    );
};

export default BadgeShoppingCart;