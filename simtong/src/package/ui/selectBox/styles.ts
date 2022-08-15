import styled from "@emotion/styled";

export const SelectStyle = styled.select`
  width: inherit;
  height: inherit;
  background: transparent;
  font-weight: 700;
  font-size: 14px;
  border: 0 none;
  outline: 0 none;
  position: relative;
  z-index: 3; // select가 위로 올라와야 함
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 15px;
  color: #242424;

  option {
    background: #ffffff;
    color: #242424;
    padding: 15px 0;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const SelectBox = styled.div`
  position: relative;
  width: 250px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
`;

export const IconArrow = styled.span`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 1;
  width: 16px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    transition: 0.3s;
  }
`;
