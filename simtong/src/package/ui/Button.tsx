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
  width: 100px;
  height: 42px;
  background: ${(props) => props.default};
  border-radius: 5px;
  padding-left: 24px;
  padding-right: 24px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;

  :hover {
    background-color: ${(props) => props.hover};
  }
  :focus {
    background-color: ${(props) => props.focus};
  }
`;

const OutlineButtonWrapper = styled.button<EventColorProps>`
  transition: all 0.3s;
  width: 100px;
  height: 42px;
  background: #ffffff;
  border: 1px solid ${(props) => props.default};
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #e84045;

  :hover {
    background-color: ${(props) => props.hover};
  }
  :focus {
    background-color: ${(props) => props.focus};
  }
`;

const TextButtonWrapper = styled.button<EventColorProps>`
  transition: all 0.3s;
  width: 100px;
  height: 42px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.default};

  :hover {
    color: ${(props) => props.hover};
  }
  :focus {
    color: ${(props) => props.focus};
  }
`;

// const ButtonWrapper = styled.button<ButtonProps>`;
//   width: 100px;
//   height: 42px;
//   background-color: ${({ backgroundColor }) =>
//     backgroundColor ? backgroundColor : "#ffffff"};
//   color: ${({ fontColor }) => fontColor};
//   border: ${({ borderColor, borderWidth }) =>
//     borderColor && borderWidth
//       ? `${borderWidth}px solid ${borderColor}`
//       : "none"};
//   border-radius: 3px;
//   font-size: 20px;
//   padding: ${({ content }) => content && "0px 14px"};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   > p {
//     line-height: ${({ height }) => height}px;
//   }
//   :hover {
//     background-color: ${({ backgroundColor, borderColor, theme }) => {
//       switch (backgroundColor) {
//         case theme.color.background:
//           return "#DFE2E8";
//         case theme.color.skyblue:
//           return "#5F88D9";
//       }
//       switch (borderColor) {
//         case theme.color.gray500:
//           return theme.color.gray500;
//         case theme.color.navy:
//           return theme.color.navy;
//         case theme.color.skyblue:
//           return theme.color.skyblue;
//       }
//     }};
//     color: ${({ fontColor, backgroundColor, borderColor, theme }) => {
//       if (
//         borderColor === theme.color.skyblue ||
//         borderColor === theme.color.navy
//       )
//         return theme.color.white;
//       else if (backgroundColor === theme.color.skyblue) return "#D6D6D6";
//       else if (backgroundColor === theme.color.background) return "#5F88D9";
//       else return fontColor;
//     }};
//   }
// `;

export default Button;
