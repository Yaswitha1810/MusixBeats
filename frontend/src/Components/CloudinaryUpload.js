import { openUploadWidget } from "../Util/CloudinaryService";
import { cloudinary_upload_preset } from "../config";

const CloudinaryUpload = ({setUrl,setName}) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dwyipetoc",
        uploadPreset: cloudinary_upload_preset,
        maxImageWidth: 600,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            setUrl(result.info.secure_url);
            setName(result.info.original_filename);
            //console.log(result.info.original_filename);
            //   props.onImageUpload(result.info.public_id);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-white text-black rounded-full p-4 font-semibold" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
