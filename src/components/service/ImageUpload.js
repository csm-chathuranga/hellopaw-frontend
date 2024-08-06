import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'unsigned_upload'); // set up an unsigned upload preset in your Cloudinary dashboard

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dtnexo7rx/image/upload`,
        formData
      );
      setUrl(response.data.secure_url);
      setMessage('Image uploaded successfully');
    } catch (error) {
      setMessage('Error uploading image');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default ImageUpload;
