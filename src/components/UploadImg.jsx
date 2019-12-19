import React, { useState } from 'react';
import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

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

const UploadImg = () => {
    const [fileList, setFileList] = useState([]);

    const handleChange = (info) => setFileList(info.fileList);
    const customUpload = ({ onError, onSuccess, file }) => {

    };

    return (
        <Dragger 
            {...props} 
            onChange={handleChange}
            customRequest={customUpload}
            fileList={fileList.filter(file => isFileSizeLt(1, file.size))}
        >
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Clique ou arraste o arquivo para esta área para fazer o upload</p>
            <p className="ant-upload-hint">
                Suporte para um upload único ou até três arquivos.
            </p>
        </Dragger>
    );
};

export default UploadImg;