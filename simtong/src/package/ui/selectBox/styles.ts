import styled from "@emotion/styled";

export const SelectStyle = styled.div`
  .active ul {
    max-height: 500px;
    display: block;
  }

  .active button img {
    transform: rotate(180deg);
  }
`;

export const SelectBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 250px;
  height: 42px;
  color: #d3d3d3;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background-color: #ffffff;

  * {
    box-sizing: border-box;
  }

  li {
    transition: all 0.3s;
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    background-color: #ffffff;

    :hover {
      background-color: #ededed;
    }
  }
`;

export const Label = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: none;
  outline: none;
  padding-left: 15px;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;

  img {
    transition: all 0.2s linear;
    position: absolute;
    right: 20px;
    width: 16px;
    height: 10px;
    object-fit: cover;
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  display: none;
  top: 28px;
  left: 0;
  width: 100%;
  border: 1px solid #d3d3d3;
  color: #000;
  list-style-type: none;
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
  max-height: 0;

  li {
    font-weight: 700;
    font-size: 14px;
  }
`;
