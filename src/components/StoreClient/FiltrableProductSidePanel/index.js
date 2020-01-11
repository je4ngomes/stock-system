import React from 'react';
import FiltrableSidePanel from './FiltrableSidePanel';

const FiltrableProductSidePanel = () => {
    const brandsOptions = [
        { label: 'Adidas', value: 'test1' },
        { label: 'Computadores', value: 'test2' },
        { label: 'Eletronicos', value: 'test3' }
    ];

    return (
        <FiltrableSidePanel
            brandsOptions={brandsOptions} 
            handleChange={vals => console.log(vals)}/>
    );
};

export default FiltrableProductSidePanel;