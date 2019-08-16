import React, { useEffect, useState } from 'react';

export default function Upload() {
    const [image, setImage] = useState('');

    function handleUpload(event) {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    return (
        <div>
            <input type="file" onChange={event => handleUpload(event)}/>
        </div>
    )
}