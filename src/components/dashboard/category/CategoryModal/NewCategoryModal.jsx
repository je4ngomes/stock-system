import React, { forwardRef, useImperativeHandle } from 'react';
import { Modal, Form, Input, Button, Icon } from 'antd';

const NewCategoryModal = forwardRef(({
    visibleState: [visible, setVisible],
    loading,
    onCancel,
    onCreate,
    form
}, ref) => {
    const { getFieldDecorator } = form;

    useImperativeHandle(ref, () => ({ form }));

    return (
        <>
            <Button
                type="primary"
                onClick={() => setVisible(true)}
                className='btn__new__category'>
                    <Icon type='plus' />
                    Nova Categoria
            </Button>
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
                        rules: [{ required: true, message: 'Por favor, insira um titulo.' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Descrição">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
})

export default Form.create({ name: 'form_in_modal' })(NewCategoryModal);
