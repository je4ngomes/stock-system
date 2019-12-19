import React from 'react';
import { 
    Select, 
    Input, 
    Form, 
    Button, 
    Icon
} from 'antd';

const { Option } = Select;

function SearcheableForm({ 
    handleSubmit, 
    categories,
    form: { getFieldDecorator, getFieldsValue, getFieldValue } 
}) {
    const submit = (e) => {
        e.preventDefault && e.preventDefault();

        handleSubmit({ 
            search: getFieldValue('search'), 
            category: e.preventDefault ? getFieldValue('category') : e
        });
    };

    return (
        <Form layout='inline' onSubmit={submit}>
            <Form.Item>
                {getFieldDecorator('category', {})(
                    <Select style={{ width: 180 }} onChange={submit} placeholder="Categoria do produto">
                        {categories.map(category => (
                            <Option value={category.id}>{category.name}</Option>
                        ))}
                    </Select>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('search', {})(
                    <Input.Search
                        placeholder="Buscar por produto"
                        style={{ width: 300 }}
                        enterButton={<Button htmlType='submit' type='primary'><Icon type='search' /></Button>}
                    />
                )}
            </Form.Item>
        </Form>
    );
};

export default Form.create()(SearcheableForm);
