import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { Column, Row } from 'simple-flexbox';

import 'react-image-gallery/styles/css/image-gallery.css';

const PreviewImgs = styled.div`
    display: flex;
    justify-content: center;
    background: #000;
`;

const ImageViewer = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    background: #000;
`;

const Img = styled.img`
    max-width: 100%;
    margin: auto;
    max-height: 100%;
`;

const ImageSlider = ({ items }) => {
    return (
        <ImageGallery
            // thumbnailPosition='bottom'
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets
            items={items}
            renderItem={img => (
                <ImageViewer>
                    <Img src={img.original} alt=''/>
                </ImageViewer>
            )}
        />
    );
};

export default ImageSlider;
