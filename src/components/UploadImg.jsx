import React, { useState } from 'react';
import { Upload, Button, Icon, message } from 'antd';

const isFileSizeLt = (l, fileSize) => (fileSize / (1024 * l)) < (1024 * l); 

const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('Você pode importa apenas arquivos JPG/PNG.');
    }

    const isLt1m = isFileSizeLt(1, file.size);

    if (!isLt1m) {
        message.error(`${file.name} precisa ser menor que 1mb!`);
    }

    return true;
}

const props = {
    name: 'file',
    accept: '.jpeg, .jpg, .png',
    listType: 'picture',
    beforeUpload,
    multiple: true
};

const UploadImg = ({ setFieldsValue }) => {
    const [fileList, setFileList] = useState([]);

    const handleChange = (info) => {
        const fileList = info.fileList.slice(-3);
        setFileList(fileList);
        setFieldsValue({ productImgs: fileList });
    };
    const customUpload = ({ _, onSuccess }) => {
        onSuccess('ok');
    };

    return (
        <Upload 
            {...props} 
            onChange={handleChange}
            customRequest={customUpload}
            fileList={fileList.filter(file => isFileSizeLt(1, file.size))}
        >
            <Button type='upload'>Carregar Imagens</Button>            
        </Upload>
    );
};

export default UploadImg;