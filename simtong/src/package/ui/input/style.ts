import styled from "styled-components";

export const InputStyle = styled.div`
  width: 250px;
  height: 42px;
`;

export const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  resize: none;
  width: 250px;
  height: 42px;
  overflow-x: hidden;
  overflow-y: hidden;
  outline: none;
  padding-left: 15px;
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

export const InputError = styled.div`
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

export const InputSuccess = styled.div`
  margin-left: 2px;
  img {
    width: 13px;
    height: 13px;
    object-fit: cover;
  }

  span {
    margin-left: 5px;
    color: #2b9429;
  }
`;

export const Show = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

export const Password = styled.div`
  position: relative;
  width: 250px;
  height: 42px;
`;
