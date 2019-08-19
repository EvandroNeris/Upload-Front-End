import React, { useEffect, useState } from 'react';
import api from '../service/api';
import './Upload.css';

export default function Upload() {
    const [image, setImage] = useState('');

    function handleUpload(event) {
        setImage(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    async function handleSave() {
        const pictures = new FormData();
        pictures.append('pictures', image);
        pictures.append('name', image.name);
        const response = await api.post('/upload', pictures);
        console.log(response)
    }

    return (
        <div className="container">
           <div className="file-upload">
                <input type="file" name="pictures" onChange={event => handleUpload(event)}/>
                <button onClick={handleSave}>Upload</button>
           </div>
        </div>
    )
}