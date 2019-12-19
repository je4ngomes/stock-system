import React, { useState, useRef } from 'react';
import NewCategoryModal from './NewCategoryModal';

export default () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

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
            visibleState={[visible, setVisible]}
            loading={loading}
            onCancel={() => setVisible(false)}
            onCreate={onCreate}
        />
    )
};