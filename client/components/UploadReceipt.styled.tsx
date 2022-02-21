import styled from "styled-components";
import { g300, g500, g600 } from "../style/colors";

export const FileUploadDropZone = styled.div`
  width: 100%;
  border: 1px dashed ${g600};
  background-color: ${(props) => {
    if (props.isDragActive) {
      return `${g300}`;
    }
    return `${g300}`;
  }};
  height: 240px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
