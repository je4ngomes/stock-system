import React from 'react';

const PaneContainer = ({
    background,
    padding = 20,
    children
}) => (
    <div style={{ 
        padding, 
        background,
        borderRadius: 5,
        }}
        className='shadow'
    >
        {children}
    </div>
);

export default PaneContainer;