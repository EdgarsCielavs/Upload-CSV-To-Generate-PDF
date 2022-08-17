import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./styles.css";

export default function CSVFileUploader({file, fileTypes, handleUpload}) {
  // const [file, setFile] = useState(null);
  
  return (
    <div className="fileUploader">
      <h1>Welcome To Drag & Drop CSV Files</h1>
      <FileUploader
        multiple={false}
        handleChange={handleUpload}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
    </div>
  );
}
