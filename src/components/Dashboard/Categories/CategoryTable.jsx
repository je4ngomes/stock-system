import React, { useState, useContext } from 'react';
import { Table, Popconfirm, Form } from 'antd';

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
    const [selectedRows, setSelectedRows] = useState([]);
    const [state, setState] = useState({
        editingKey: '',

    });

    const isEditing = record => record.key === state.editingKey;
    const cancel = () => setState({ editingKey: '' });
    const edit = key => setState({ editingKey: key });
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
                    <span>
                        <a
                            onClick={() => save(formFromConsumer, record.key)}
                            style={{ marginRight: 8 }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={() => cancel(record.key)}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <a disabled={editingKey !== ''} onClick={() => edit(record.key)}>
                        Edit
                    </a>
                );
                }
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    }

    const columnsEdit = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <EditableContext.Provider value={form}>
            <Table 
                rowSelection={rowSelection}
                components={{ body: { cell: EditableCell } }}
                style={{ marginTop: 20 }}
                rowClassName="editable-row"
                columns={columnsEdit} 
                dataSource={data} />
        </EditableContext.Provider>
    )
}

export default Form.create()(CategoryTable);
