import React, { useContext, useState } from 'react';
import './DesignTemplate.scss'
import upload from '../../../images/icon/up-2.png';
import LoadImage from '../../LoadImage/LoadImage';
import { userContext } from '../../../App';


const DesignTemplate = () => {
    const [file, setFile] = useState(null);
    const { value2 } = useContext(userContext);
    const [handleShowImage] = value2;


    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)

        fetch('http://localhost:5000/uploadImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
        document.getElementById('formData').reset();
    }


    return (
        <div className="container">

            <div className="template__body">
                <div className="uploadImage__body">
                    <LoadImage />
                </div>
                <div className="uploadImage__input">
                    <form onSubmit={handleSubmit} id="formData">
                        <label class="custom-file-upload">
                            <img className="mr-3" src={upload} alt="" />
                            <input id="upload-photo" onChange={handleFileChange} type="file" />
                            Upload Image
                        </label>
                        <input className="button-brand mx-3" type="submit" />
                        <input onClick={handleShowImage} className="button-brand" type="button" value="Show Image" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DesignTemplate;