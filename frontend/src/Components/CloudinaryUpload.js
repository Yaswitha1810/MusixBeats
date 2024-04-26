import { openUploadWidget } from "../Util/CloudinaryService";
import { cloudinary_upload_preset } from "../config";


const CloudinaryUpload = ({setUrl,setName,setThumbnail,setTrackLength}) => {
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
            setThumbnail(result.info.thumbnail_url);
            const track = Math.floor(result.info.duration);
            setTrackLength(track);
            console.log(result.info);
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
