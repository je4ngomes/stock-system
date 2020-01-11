import React, { useState } from 'react';
import { 
    Form, 
    Input,
    Modal, 
    Select, 
    Button, 
    Icon, 
    DatePicker, 
    Row, 
    Col 
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;
const { RangePicker } = DatePicker;

const CreateEventModal = ({
    form: { getFieldDecorator, validateFields },
    submit
}) => {
    const [visible, setVisible] = useState(false);

    const cancel = () => setVisible(false);
    const handleSubmit = () => {
        validateFields((err, vals) => {
            if (err) return;

            submit(vals);
            setVisible(false);
        })
    };

    return (
        <div style={{ display: 'inline', position: 'relative', top: -3 }}>
            <Button shape='circle' type="default" onClick={() => setVisible(true)}>
                <Icon type='plus' />
            </Button>
            <Modal
                visible={visible}
                title="Novo evento"
                onCancel={cancel}
                footer={[
                    <Button key="back" onClick={cancel}>
                        cancelar
                    </Button>,
                    <Button key="submit" type="primary" loading={false} onClick={handleSubmit}>
                        Criar
                    </Button>
                ]}
            >
                <Form>
                    <Row>
                        <Col span={12}>
                            <Form.Item label='Nome do evento'>
                                {getFieldDecorator('name', { 
                                    rules: [{ required: true, message: 'Inserir nome do evento.' }]
                                 })(<Input style={{ width: 200 }} />)}
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item label='Tipo do evento.'>
                                {getFieldDecorator('eventType', { 
                                    rules: [{ required: true, message: 'Inserir tipo do evento.' }]
                                })(
                                    <Select>
                                        <Option value='INFO'>Informativo</Option>
                                        <Option value='WARN'>Aviso</Option>
                                        <Option value='CRITICAL'>Crítico</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Item label='Descrição do evento'>
                                {getFieldDecorator('description', { 
                                    rules: [{ required: true, message: 'Inserir descrição do evento.' }]
                                 })(<TextArea/>)}
                            </Form.Item>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Item label='Programação'>
                                {getFieldDecorator('date', { 
                                    rules: [{ required: true, message: 'Informa programação do evento.' }]
                                 })(
                                    <RangePicker
                                        placeholder={['Start month', 'End month']}
                                        format="DD/MM/YYYY HH:mm:ss"
                                        showTime
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}

export default Form.create()(CreateEventModal);
