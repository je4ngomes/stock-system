import React, { useEffect, useState } from 'react';
import { 
    Select, 
    Input, 
    Form, 
    Button, 
    Icon
} from 'antd';
import BrandSelector from './shared/BrandSelector';

const { Option } = Select;

function SearcheableForm({ 
    handleSubmit,
    form: { getFieldDecorator, getFieldsValue, getFieldValue, validateFields } 
}) {
    const [lastKeyPressed, setLastKeyPressed] = useState(null);
    const search = getFieldValue('search');
    const submit = (e) => {
        e.preventDefault && e.preventDefault();
 
        validateFields((err, values) => handleSubmit({ ...values, search: values.search.toLowerCase() }))
        ;
    };

    useEffect(() => {
        if (search == '' && lastKeyPressed == 'Backspace')
            submit(getFieldsValue()); 
    }, [search]);

    return (
        <Form layout='inline' onSubmit={submit}>
            <Form.Item>
                {getFieldDecorator('category', { initialValue: 1 })(
                    // <Select style={{ width: 180 }} onSelect={submit} placeholder="Categoria do produto">
                    //     <Option key={1} value={1}>Todos</Option>
                    //     {categories.map(category => (
                    //         <Option key={category.id} value={category.id}>{category.name}</Option>
                    //     ))}
                    // </Select>
                    <BrandSelector onSelect={val => submit({ category: val })} placeholder="Categoria do produto"/>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('search', {
                    initialValue: ''
                })(
                    <Input.Search
                        placeholder="Buscar por produto"
                        onKeyUp={e => setLastKeyPressed(e.key)}
                        style={{ width: 300 }}
                        enterButton={<Button htmlType='submit' type='primary'><Icon type='search' /></Button>}
                    />
                )}
            </Form.Item>
        </Form>
    );
};

export default Form.create()(SearcheableForm);
