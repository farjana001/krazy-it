import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowImage from '../ShowImage/ShowImage';
import spinner from '../../images/spinner.gif';
import './LoadImage.scss'
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';


const LoadImage = () => {
    const {value1} = useContext(userContext);
    const [uploadedImage, setUploadedImage] = value1;
    const history = useHistory();

    const handleCancelBtn = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        }, [uploadedImage])
            .then(res => res.json())
            .then(result => {
                if (result > 0) {
                    history.push('/');
                }
            })
            
            window.location.reload();   
    }

    return (
        <div>
            <div>
                {
                    uploadedImage && uploadedImage.map((each, index) => <ShowImage key={index} uploadedImage={each} handleCancelBtn={handleCancelBtn} />)
                }

            </div>
        </div>
    );
};

export default LoadImage;