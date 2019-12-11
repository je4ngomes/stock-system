import React, { forwardRef, useImperativeHandle } from 'react';
import { Modal, Form, Input } from 'antd';

const NewCategoryModal = forwardRef(({
    visible,
    loading,
    onCancel,
    onCreate,
    form
}, ref) => {
    const { getFieldDecorator } = form;

    useImperativeHandle(ref, () => ({ form }));

    return (
        <Modal
            visible={visible}
            title="Adiciona nova categoria"
            okText="Create"
            confirmLoading={loading}
            onCancel={onCancel}
            onOk={onCreate}
        >
            <Form layout="vertical">
                <Form.Item label="Titulo">
                    {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Por favor, insira um titulo a descrição.' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Descrição">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                </Form.Item>
            </Form>
        </Modal>
    )
})

export default Form.create({ name: 'form_in_modal' })(NewCategoryModal);
