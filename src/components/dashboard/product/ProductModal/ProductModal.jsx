import React, { useState } from 'react';
import { 
    Drawer, 
    Form, 
    Button, 
    Col, 
    Row, 
    Input, 
    Select, 
    Icon, 
    InputNumber
} from 'antd';
import UploadImg from '../../../UploadImg';

const { Option } = Select;

const formatter = (value) => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const ProductModal = ({
    form: { getFieldDecorator, getFieldValue, setFieldsValue, validateFields },
    categories,
    submit
}) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => setVisible(true);
    const handleClose = () => setVisible(false);

    const getDiscount = () => {
        const price = getFieldValue('price');
        const discount = getFieldValue('discount');
        return formatter(discount ? price - ((discount / 100) * price) : discount);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        validateFields((err, values) => {
            if (err) return;

            submit(values);
        })
    };

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
                                {categories.map(category => (
                                    <Option value={category.id}>{category.name}</Option>
                                ))}
                            </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label={(
                            <>
                                Preço:{' '}
                                <span style={{ fontSize: 13, color: '#43a047' }}>{formatter(getFieldValue('price'))}</span>
                            </>
                        )}>
                            {getFieldDecorator('price', {
                                initialValue: 0,
                                rules: [{ required: true, message: 'Por favor, informe o preço do produto.' }],
                            })(<InputNumber
                                style={{ width: 190 }}
                                min={0} 
                                placeholder='Preço do produto' />)}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Quantidade estoque">
                            {getFieldDecorator('quantity', {
                                rules: [{ required: true, message: 'Por favor, informe a quantidade limite do produto.' }],
                            })(<InputNumber min={0} style={{ width: 190 }} />)}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={(
                            <>
                                Desconto %:{' '}
                                <span style={{ fontSize: 13, color: '#ef5350' }}>{getDiscount()}</span>
                            </>
                        )}>
                            {getFieldDecorator('discount', {
                                initialValue: 0,
                            })(<InputNumber
                                style={{ width: 190 }}/>)}
                        </Form.Item> 
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="">
                            {getFieldDecorator('productImgs', {
                                valuePropName: 'fileList',
                                initialValue: [],
                                getValueFromEvent: normFile
                            })(
                                <UploadImg setFieldsValue={setFieldsValue} />
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