import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useStoreState, useStoreActions } from "./store";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    <Container className="mt-3" fluid>
      <Row>
        <Col>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          <Button onClick={() => onSubmit()} className="mt-3">
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TestDropzone;
