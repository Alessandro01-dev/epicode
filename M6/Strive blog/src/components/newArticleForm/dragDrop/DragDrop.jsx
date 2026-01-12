import { FileUploader } from "react-drag-drop-files";
import './DragDrop.css'

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = ({ file, setFile }) => {

  const handleChange = (file) => {
    setFile(file);
  };

  const fileURL = file ? URL.createObjectURL(file) : null;

  return (
    <>
      <FileUploader
        classes="drag-n-drop-main-container"
        handleChange={handleChange}
        name="cover"
        types={fileTypes}
        multiple={false}
        uploadedLabel="Uploaded Successfully!"
      />
      {file && (
        <div
          className="d-flex align-items-center w-100 gap-4"
        >
          <img
            className="updated-img-thumbnail"
            src={fileURL}
            alt="uploaded image thumbnail"
          />
          <p
            className="m-0"
          >{file.name}</p>
        </div>
      )}
    </>
  );
};

export default DragDrop;
