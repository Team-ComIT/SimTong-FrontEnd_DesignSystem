import styled from "@emotion/styled";

export const TextAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

interface textAreaInputType {
  width: string;
  height: string;
  borderColor: string;
}

export const TextAreaInput = styled.textarea<textAreaInputType>`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  resize: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow-x: hidden;
  overflow-y: hidden;
  outline: none;
  caret-color: #006eff;
  font-weight: 400;
  font-size: 14px;
  color: #242424;

  &:focus {
    color: #000;
    border: 1px solid #006eff;
  }
  &:invalid {
    border-color: #dc3035;
  }
  &::placeholder {
    color: #d3d3d3;
  }
`;

interface textAreaLabelType {
  width: string;
}

export const TextAreaLabel = styled.div<textAreaLabelType>`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TextAreaLength = styled.span`
  color: #929292;
`;

export const TextAreaError = styled.div`
  margin-left: 2px;
  img {
    width: 13px;
    height: 13px;
    object-fit: cover;
  }

  span {
    margin-left: 5px;
    color: #dc3035;
  }
`;
