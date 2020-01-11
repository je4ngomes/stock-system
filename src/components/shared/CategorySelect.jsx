import React, { useEffect, useState } from 'react';
import { 
    Select, 
    Icon,
    Divider,
    Popover,
    message, 
    Button,
    Input
} from 'antd';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory } from '../../store/actions/categoryAction';

const { Option } = Select;

const CategorySelect = ({ showAction, getFieldValue, setFieldsValue, ...props }) => {
    useFirestoreConnect({
        collection: 'categories',
        orderBy: 'name'
    });

    const {
        categories,
        loading,
        error
    } = useSelector(({ firestore: { ordered }, category }) => ({
        categories: ordered.categories || [],
        ...category
    }));
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState('');
    const [visible, setVisible] = useState(false);

    const addCategory = () => {
        if (categoryName.trim() === '') return;

        dispatch(createCategory(categoryName));
        setVisible(false);
        setCategoryName('');
    };

    const removeCategorySelected = () => {
        dispatch(
            deleteCategory(getFieldValue('category'))
        );
        setFieldsValue({ category: undefined });
    }

    const contentPopOver = (
        <div>
            <Input
                onChange={({ target: { value } }) => setCategoryName(value)}
                value={categoryName}
                required 
                name='categoryName' />
            <Button 
                size='small'
                style={{ marginTop: 10 }} 
                type='primary' 
                onClick={addCategory}>
                <Icon type='plus' /> Add 
            </Button>
        </div>

    );

    useEffect(() => {
        if (error)
            message.error(error.message, 3);
    }, [error]);
    
    return (
        <div>
            <Select 
                showSearch 
                placeholder="Categoria do produto"
                style={{ width: 170 }}
                loading={loading}
                notFoundContent='Nada a ser exibido'
                {...props}
            >
                {!showAction && <Option key={1} value={1}>Todos</Option>}
                {categories.map(category => (
                    <Option key={category.id} value={category.id}>
                        {category.name}{' '}
                    </Option>
                ))}
            </Select>
            {showAction && (
                <div style={{ marginLeft: 10, display: 'inline-block' }}>
                    <Popover
                        title='Nova categoria'
                        placement='bottom'
                        content={contentPopOver}
                        visible={visible}
                        onVisibleChange={setVisible}
                        trigger='click'>
                        <Button shape='circle' size='small' type='primary'>
                            <Icon type='plus' />
                        </Button>
                    </Popover>

                    <Button 
                        disabled={!Boolean(getFieldValue('category'))} 
                        shape='circle'
                        style={{ marginLeft: 5}}
                        onClick={removeCategorySelected} 
                        size='small' 
                        type='danger'>
                        <Icon type='minus' />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CategorySelect;
