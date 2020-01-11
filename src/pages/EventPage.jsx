import React, { useState } from 'react';
import { Row, Col, Layout, Icon } from 'antd';
import Title from 'antd/lib/typography/Title';

import CreateEventModal from '../components/dashboard/event/CreateEventModal';
import EventTimeline from '../components/dashboard/event/EventTimeline';

const { Header, Content } = Layout;

const EventPage = () => {
    const [sort, setSort] = useState({ left: 'asc', right: 'asc' });

    const handleSort = (position) => () => (
        setSort(sort => ({
            ...sort,
            [position]: sort === 'asc' ? 'desc' : 'asc'
        })
    ));

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={24}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ 
                                display: 'inline',
                                marginRight: 10
                            }} level={3}>Eventos</Title>
                            <CreateEventModal />
                        </div>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span={10} offset={2}>
                        <Title style={{ marginRight: 5 }} level={4}>Pendentes</Title>
                        <Icon type={`sort-${sort.left}ending`} onClick={handleSort('left')} />
                        <EventTimeline sort={sort.left} align='left'/>
                    </Col>
                    <Col span={10}>
                        <Title style={{ textAlign: 'right', marginRight: 5 }} level={4}>Enviados</Title>
                        <Icon type={`sort-${sort.right}ending`} onClick={handleSort('right')} />                        
                        <EventTimeline align='right'/>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default EventPage;
