import styled from "@emotion/styled";

export const TextAreaStyle = styled.div`
  width: 328px;
  height: 128px;
`;

export const TextAreaInput = styled.textarea`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  resize: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  outline: none;
  caret-color: #006eff;
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

export const TextAreaLabel = styled.div`
  width: 100%;
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
