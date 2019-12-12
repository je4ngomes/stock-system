import React, { useState, useRef } from 'react';
import NewCategoryModal from './NewCategoryModal';

const CategoryModal = ({ stateVisible: [visible, setVisible] }) => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const onCreate = () => {
        const { form } = formRef.current;
        
        form.validateFields((err, vals) => {
            if (err) return ;

            setLoading(true);
            console.log(vals);
            form.resetFields();
            
            setLoading(false);
            setVisible(false);
        })
    }

    return (
        <NewCategoryModal
            wrappedComponentRef={ref => (formRef.current = ref)}
            visible={visible}
            loading={loading}
            onCancel={() => setVisible(false)}
            onCreate={onCreate}
        />
    )
}

export default CategoryModal;
