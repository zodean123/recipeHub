import axios from "axios";

const uploadImage = async (e, setProgress, setFormDetails, formDetails) => {
  if (
    e.target.files[0].type === "image/jpeg" ||
    e.target.files[0].type === "image/png"
  ) {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    const config = {
      onUploadProgress: (event) => {
        const { loaded, total } = event;
        setProgress((loaded / total) * 100);
      },
    };

    try {
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

      const response = await axios.post(cloudinaryUrl, data, config);

      const { url } = response.data;
      setFormDetails({ ...formDetails, [e.target.id]: url });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  } else {
    console.error("Please select an image in jpeg or png format");
  }
};

export default uploadImage;
