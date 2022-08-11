import styled from "@emotion/styled";
import { FC, useState } from "react";

type ButtonTypes =
  | "ColorFiled"
  | "ColorOutline"
  | "ColorText"
  | "GrayFiled"
  | "GrayOutline"
  | "GrayText";

interface ButtonProps {
  buttonType?: ButtonTypes;
  content?: string;
  image?: string;
  hoverImage?: string;
  onClick?: () => void;
}

interface EventColorProps {
  default: string;
  hover: string;
  focus: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { buttonType, image, content, hoverImage, onClick } = props;
  const [icon, setIcon] = useState<string>(image ? image : "");

  switch (buttonType) {
    case "ColorFiled":
      return (
        <FiledButtonWrapper
          default="#ED666A"
          hover="#FF999C"
          focus="#E84045"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content}
        </FiledButtonWrapper>
      );
    case "GrayFiled":
      return (
        <FiledButtonWrapper
          default="#D3D3D3"
          hover="#EDEDED"
          focus="#BDBDBD"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content && <p>{content}</p>}
        </FiledButtonWrapper>
      );
    case "ColorOutline":
      return (
        <OutlineButtonWrapper
          default="#FFFFFF"
          hover="#FFEDEE"
          focus="#FF999C"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content && <p>{content}</p>}
        </OutlineButtonWrapper>
      );
    case "GrayOutline":
      return (
        <OutlineButtonWrapper
          default="#FFFFFF"
          hover="#FDFDFD"
          focus="#EDEDED"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content && <p>{content}</p>}
        </OutlineButtonWrapper>
      );
    case "ColorText":
      return (
        <TextButtonWrapper
          default="#ED666A"
          hover="#FF999C"
          focus="#E84045"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content && <p>{content}</p>}
        </TextButtonWrapper>
      );
    case "GrayText":
      return (
        <TextButtonWrapper
          default="#BDBDBD"
          hover="#D3D3D3"
          focus="#BDBDBD"
          {...props}
          onMouseOver={() => {
            image && setIcon(hoverImage ? hoverImage : image);
          }}
          onMouseOut={() => {
            image && setIcon(image);
          }}
          onClick={onClick}
        >
          {icon && image && (
            <img src={icon} width={20} height={20} className={"image"} />
          )}
          {content && <p>{content}</p>}
        </TextButtonWrapper>
      );
  }

  return <></>;
};

const FiledButtonWrapper = styled.button<EventColorProps>`
  transition: all 0.3s;
  height: 42px;
  background: ${(props) => props.default};
  border-radius: 5px;
  border: none;
  padding: 0px 24px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 8px;

  :hover {
    background-color: ${(props) => props.hover};
  }
  :focus {
    background-color: ${(props) => props.focus};
  }
`;

const OutlineButtonWrapper = styled.button<EventColorProps>`
  transition: all 0.3s;
  height: 42px;
  background: #ffffff;
  border: 1px solid ${(props) => props.default};
  border-radius: 5px;
  padding: 0px 24px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e84045;
  gap: 8px;

  :hover {
    background-color: ${(props) => props.hover};
  }
  :focus {
    background-color: ${(props) => props.focus};
  }
`;

const TextButtonWrapper = styled.button<EventColorProps>`
  transition: all 0.3s;
  height: 42px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0px 24px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.default};
  gap: 8px;

  :hover {
    color: ${(props) => props.hover};
  }
  :focus {
    color: ${(props) => props.focus};
  }
`;

export default Button;
