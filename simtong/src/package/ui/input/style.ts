import styled from "@emotion/styled";

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

interface InputType {
  width: string;
  borderColor: string;
}

export const Input = styled.input<InputType>`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  resize: none;
  width: ${(props) => props.width};
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
  cursor: pointer;
  width: 22px;
  height: 22px;
  object-fit: cover;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

export const Password = styled.div`
  position: relative;
`;
