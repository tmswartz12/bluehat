import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useStoreState, useStoreActions } from "./store";

function TestDropzone() {
  const uploadReceipt = useStoreActions(
    (actions) => actions.receipt.uploadReceipt
  );

  const [selectedFile, setSelectedFile] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(acceptedFiles[0]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const onSubmit = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("file_name", selectedFile.name);
    uploadReceipt(data);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button onClick={() => onSubmit()}>Submit</button>
    </>
  );
}

export default TestDropzone;
