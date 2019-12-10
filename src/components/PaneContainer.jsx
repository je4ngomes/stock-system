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
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }}>
        {children}
    </div>
);

export default PaneContainer;