import React, { useState } from 'react';
import { Form, Modal, Input, Row, Col, Timeline, Icon } from 'antd';
import moment from 'moment';
import 'moment/locale/pt-br';

const sortHour = (A, B) => A.hours.valueOf() - B.hours.valueOf();

const ViewEventsModal = ({ 
    showModal: [visible, setVisible],
    eventId
}) => {
    const [eventCollection, setEventCollection] = useState({ 
        launched: false,
        date: new Date(),
        events: [{ message: 'Evento 1', hours: new Date().valueOf() + 200 },
                { message: 'Evento 2', hours: new Date().valueOf() + 40000 }]
    });

    const handleSubmit = () => {
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            title={`Eventos do dia ${moment(eventCollection.date).format('LL')}`}
            okText={eventCollection.launched ? null : 'Notificar Usuários'}
            cancelText='Cancelar'
            onCancel={() => setVisible(false)}
            onOk={handleSubmit}
        >
            <Row>
                <Col span={24}>
                    <Timeline>
                        {eventCollection.events.sort(sortHour).map(event => (
                            <Timeline.Item>{moment(event.hours).format('LT')} {event.message}</Timeline.Item>
                        ))}
                    </Timeline>
                </Col>
            </Row>
            {/* <Form layout='vertical'>
                <Form.Item label='Nome do evento'>
                    {getFieldDecorator('eventName', {
                    rules: [{ required: true, message: 'Por favor, digite o nome do evento!' }],
                    })(<Input />)}
                </Form.Item>
            </Form> */}
        </Modal>
    );
};

export default ViewEventsModal;