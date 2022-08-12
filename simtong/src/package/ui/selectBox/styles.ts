import styled from "@emotion/styled";

export const SelectStyle = styled.select`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 250px;
  height: 42px;
  padding-left: 15px;
  color: #d3d3d3;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background: url("arrow.png") no-repeat 97% 50%/15px auto;

  option {
    width: 600px;
    height: 70px;
  }
`;
