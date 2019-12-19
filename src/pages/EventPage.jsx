import React, { useState } from 'react';
import { Button, Row, Col, Layout, Icon } from 'antd';
import Title from 'antd/lib/typography/Title';

import CalendarEvent from '../components/dashboard/event/CalendarEvent';

const { Header, Content } = Layout;

const EventPage = () => {

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={4}>
                        <Title level={4}>Eventos</Title>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span={24}>
                        <CalendarEvent />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default EventPage;
