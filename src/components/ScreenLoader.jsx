import React from 'react';

import spinnerSvg from '../assets/spinner.svg';
import Title from 'antd/lib/typography/Title';

const ScreenLoader = () => {
    return (
        <div style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            backgroundColor: '#263238',
            zIndex: 9999 
        }}>
            <div className='center-screen'>
                <img src={spinnerSvg} alt=""/>
                <Title style={{ color: '#fff' }} level={4}>Carregando...</Title>
            </div>
        </div>
    )
}

export default ScreenLoader;
