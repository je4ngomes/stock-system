import React, { useState } from 'react';
import { 
    Drawer, 
    Form, 
    Button, 
    Col, 
    Row, 
    Input, 
    Select, 
    DatePicker, 
    Icon, 
    InputNumber
} from 'antd';
import UploadImg from '../../../UploadImg';

const { Option } = Select;

const ProductModal = ({
    form: { getFieldDecorator, getFieldsValue }
}) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true);
    const handleClose = () => setVisible(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getFieldsValue)
    }

    const normFile = e => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <div>
        <Button type="primary" onClick={showDrawer}>
            <Icon type="plus" /> Novo produto
        </Button>
        <Drawer
            title="Adicionar novo produto"
            width={720}
            onClose={handleClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item label="Nome">
                        {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Por favor, digite o nome do produto.' }],
                        })(<Input placeholder="Nome do produto" />)}
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Categorias">
                            {getFieldDecorator('category', {
                            rules: [{ required: true, message: 'Por favor, selecione uma categoria.' }],
                            })(
                            <Select placeholder="Categoria do produto">
                                <Option value="xiao">Xiaoxiao Fu</Option>
                                <Option value="mao">Maomao Zhou</Option>
                            </Select>,
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Preço">
                            {getFieldDecorator('price', {
                            rules: [{ required: true, message: 'Por favor, informe o preço do produto.' }],
                            })(<InputNumber
                                style={{ width: 200 }} 
                                formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/R\$\s?|(,*)/g, '')}
                                placeholder='Preço do produto' />)}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Quantidade">
                            {getFieldDecorator('quantity', {
                            rules: [{ required: true, message: 'Por favor, informe a quantidade limite do produto.' }],
                            })(<InputNumber style={{ width: 200 }} placeholder="Quantidade do produto" />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Apresentação">
                            {getFieldDecorator('productImgs', {
                                valuePropName: 'fileList',
                                getValueFromEvent: normFile
                            })(
                                <UploadImg />
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Description">
                            {getFieldDecorator('description', {
                            rules: [
                                {
                                required: true,
                                message: 'please enter url description',
                                },
                            ],
                            })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                }}
                >
                <Button onClick={handleClose} style={{ marginRight: 8 }}>
                    Cancel
                </Button>
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </Drawer>
        </div>
    );
}

export default Form.create()(ProductModal);