import React from 'react';
import './ShowImage.scss';
import crossMark from '../../images/icon/cross-mark.png';

const ShowImage = ({ uploadedImage, handleCancelBtn }) => {
    const { _id } = uploadedImage;
    console.log(uploadedImage);
    return (
        <div className="text-center crossButton">
            <button onClick={() => handleCancelBtn(_id)}><img src={crossMark} alt="" /></button>
            {
                uploadedImage.image &&
                <div className="showImage mx-auto">
                    <img src={`data:image/png;base64,${uploadedImage.image.img}`} alt="" />
                </div>
            }
        </div>
    );
};

export default ShowImage;