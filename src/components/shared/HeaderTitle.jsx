import React from 'react';
import { Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';

const Header = styled.header`
    padding: 20px 20px 0px 20px;
`;

const Span = styled.span`
    color: #2196f3;
    font-weight: 500;
    font-size: 16pt;
`;

const HeaderTitle = ({ title }) => {
    return (
        <Header>
            <Span>{title}</Span>
            <Divider style={{ margin: '10px 0px' }}/>
        </Header>
    )
}

export default HeaderTitle;
