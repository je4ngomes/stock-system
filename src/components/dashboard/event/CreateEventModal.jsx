import React from 'react';
import { Form, Modal, Input, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/pt-br';

const CreateEventModal = ({ 
    showModal: [visible, setVisible], 
    date, 
    form: { getFieldDecorator } 
}) => {

    const handleSubmit = () => {
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            title={`Criar evento para o dia ${moment(date).format('LL')}`}
            okText='Adicionar'
            cancelText='Cancelar'
            onCancel={() => setVisible(false)}
            onOk={handleSubmit}
        >
            <Form layout='vertical'>
                <Form.Item label='Nome do evento'>
                    {getFieldDecorator('eventName', {
                    rules: [{ required: true, message: 'Por favor, digite o nome do evento!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label='Horas'>
                    {getFieldDecorator('eventName', {
                    rules: [{ required: true, message: 'Por favor, selecione o horário do evento!' }],
                    })(<TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />)}
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Form.create()(CreateEventModal);