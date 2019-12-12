import React, { useState, useContext } from 'react';
import { Table, Popconfirm, Form, Divider, Icon, Button } from 'antd';

import EditableContext from './EditableContext';
import EditableCell from './EditableCell';

const data = [
  {
    key: '1',
    title: 'Eletronicos',
    description: 'sadsoidpsoidoispdoiaospidsdd'
  },
  {
    key: '2',
    title: 'Livros',
    description: 'sadsoidpsoidoispdoiaospidsdd'
  }
];


const CategoryTable = ({ form }) => {
    const formFromConsumer = useContext(EditableContext);
    const [state, setState] = useState({
        editingKey: '',

    });

    const isEditing = record => record.key === state.editingKey;
    const cancel = () => setState({ editingKey: '' });
    const edit = key => setState({ editingKey: key });
    const deleteItem = () => null;
    const save = () => (0);

    const columns = [
        {
            title: 'Titulo',
            dataIndex: 'title',
            editable: true,
            render: text => <a>{text}</a>
        },
        {
            title: 'Descrição',
            editable: true,
            dataIndex: 'description'
        },
        {
            title: 'Ações',
            dataIndex: 'action',
            render: (text, record) => {
                const { editingKey } = state;
                const editable = isEditing(record);
                return editable ? (
                    <>
                        <Button
                            onClick={() => save(formFromConsumer, record.key)}
                            style={{ marginRight: 8 }}
                            type='primary'
                            shape='circle'
                        >
                            <Icon type='save' />
                        </Button>
                        <Popconfirm title="Deseja cancelar operação?" onConfirm={() => cancel(record.key)}>
                            <Button
                                type='danger'
                                shape='circle'
                            >
                                <Icon type='close' />
                            </Button>
                        </Popconfirm>
                    </>
                ) : (
                    <>
                        <Button
                            shape='circle' 
                            disabled={editingKey !== ''}
                            type='primary' 
                            onClick={() => edit(record.key)}
                        >
                            <Icon type='edit' />
                        </Button>
                        <Divider type='vertical' />
                        <Button
                            shape='circle' 
                            type='danger' 
                            onClick={() => deleteItem(record.key)}
                        >
                            <Icon type='delete' />
                        </Button>
                    </>                    
                );
                }
        }
    ];

    const columnsEdit = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <EditableContext.Provider value={form}>
            <Table
                components={{ body: { cell: EditableCell } }}
                style={{ marginTop: 20 }}
                rowClassName="editable-row"
                columns={columnsEdit} 
                dataSource={data} />
        </EditableContext.Provider>
    )
}

export default Form.create()(CategoryTable);
