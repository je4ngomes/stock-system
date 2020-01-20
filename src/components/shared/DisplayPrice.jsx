import React from 'react';
import Text from 'antd/lib/typography/Text';

const hasDiscount = (discount) => discount > 0;
const withDiscount = (discount, price) => (price - ((discount / 100) * price)).toFixed(2);  

const DisplayPrice = ({ price, discount, textSize=25 }) => {
    const dis = hasDiscount(discount);

    return (
        <div style={{ margin: '10px 0' }}>
            <Text style={{ fontSize: textSize, marginBottom: 0, marginRight: 5, color: dis ? '#4caf50' : '#424242' }}>
                € {dis ? withDiscount(discount, price) : price.toFixed(2)}
            </Text>
            <div style={{ float: 'right', textAlign: 'end' }}>
                {dis && <Text delete style={{ color: '#ef5350', display: 'block' }}>R$ {price}</Text>}
            </div>
        </div>
    );
};
export default DisplayPrice;
