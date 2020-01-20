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
import { createBrand, deleteBrand } from '../../store/actions/brandAction';

const { Option } = Select;

const BrandSelector = ({ showAction, getFieldValue, setFieldsValue, ...props }) => {
    useFirestoreConnect({
        collection: 'brands',
        orderBy: 'name'
    });

    const {
        brands,
        loading,
        error
    } = useSelector(({ firestore: { ordered }, brand }) => ({
        brands: ordered.brands || [],
        ...brand
    }));
    const dispatch = useDispatch();
    const [brandName, setBrandName] = useState('');
    const [visible, setVisible] = useState(false);

    const addBrand = () => {
        if (brandName.trim() === '') return;

        dispatch(createBrand(brandName));
        setVisible(false);
        setBrandName('');
    };

    const removeBrandSelected = () => {
        dispatch(
            deleteBrand(getFieldValue('brand'))
        );
        setFieldsValue({ brand: undefined });
    }

    const contentPopOver = (
        <div>
            <Input
                onChange={({ target: { value } }) => setBrandName(value)}
                value={brandName}
                required 
                name='brandName' />
            <Button 
                size='small'
                style={{ marginTop: 10 }} 
                type='primary' 
                onClick={addBrand}>
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
                placeholder="Marca do produto"
                style={{ width: 170 }}
                loading={loading}
                notFoundContent='Nada a ser exibido'
                {...props}
            >
                {!showAction && <Option key={1} value={1}>Todos</Option>}
                {brands.map(brand => (
                    <Option key={brand.id} value={brand.id}>
                        {brand.name}{' '}
                    </Option>
                ))}
            </Select>
            {showAction && (
                <div style={{ marginLeft: 10, display: 'inline-block' }}>
                    <Popover
                        title='Nova marca'
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
                        disabled={!Boolean(getFieldValue('brand'))} 
                        shape='circle'
                        style={{ marginLeft: 5}}
                        onClick={removeBrandSelected} 
                        size='small' 
                        type='danger'>
                        <Icon type='minus' />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default BrandSelector;
