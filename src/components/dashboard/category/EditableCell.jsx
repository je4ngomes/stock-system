import React from 'react';
import { Form, InputNumber, Input } from "antd";
import { useContext } from "react";

import EditableContext from './EditableContext';


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const { getFieldDecorator } = useContext(EditableContext);

    const getInput = () => {
        if (inputType === 'number') {
        return <InputNumber />;
        }
        return <Input />;
    };

    return (
        <td {...restProps}>
            {editing ? (
            <Form.Item style={{ margin: 0 }}>
                {getFieldDecorator(dataIndex, {
                rules: [
                    {
                    required: true,
                    message: `Por favor, complete o campo!`,
                    },
                ],
                initialValue: record[dataIndex],
                })(getInput())}
            </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

export default EditableCell;