import axios from 'axios';

export const handleUpload = async (selectedImage) => {
  const formData = new FormData();
  formData.append('file', selectedImage);
  formData.append('upload_preset', 'unsigned_upload');

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dtnexo7rx/image/upload`,
      formData
    );
    return response;
  } catch (error) {
    throw error;
  }
};
