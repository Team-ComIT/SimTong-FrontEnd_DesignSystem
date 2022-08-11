import React, { useState, useRef } from "react";
import * as S from "./style";
import errorImg from "./error.png";

interface textAreaType {
  width: string;
  height: string;
  label: string;
  maxLenght: number;
  errorMessge?: string;
  event?: any;
}

export default function TextArea(props: textAreaType) {
  const { width, height, errorMessge, label, maxLenght, event } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [textLenght, setTextLenght] = useState<number>(0);

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextLenght(e.target.value.length);
    if (event) {
      event(e);
    }
  };

  return (
    <>
      <S.TextAreaStyle>
        <S.TextAreaLabel width={width}>
          <span>{label}</span>
          <S.TextAreaLength>
            {textLenght}/{maxLenght}
          </S.TextAreaLength>
        </S.TextAreaLabel>
        <S.TextAreaInput
          ref={textAreaRef}
          onChange={changeText}
          width={width}
          height={height}
          borderColor="#D3D3D3"
          placeholder="Placeholder Text"
          maxLength={maxLenght}
        />
        {error ? (
          <S.TextAreaError>
            <img src={errorImg} alt="error" />
            <span>{errorMessge || <>에러가 발생했습니다</>}</span>
          </S.TextAreaError>
        ) : (
          <></>
        )}
      </S.TextAreaStyle>
    </>
  );
}
