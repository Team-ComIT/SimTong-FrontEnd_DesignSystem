import React, { useState } from "react";
import * as S from "./style";
import errorImg from "./error.png";

interface textAreaType {
  width: string;
  height: string;
  label: string;
  errorMessge?: string;
  event?: () => {};
}

export default function TextArea(props: textAreaType) {
  const { width, height, errorMessge, label, event } = props;
  const [error, setError] = useState<boolean>(false);

  return (
    <>
      <S.TextAreaStyle>
        <S.TextAreaLabel width={width}>
          <span>{label}</span>
          <S.TextAreaLength>0/200</S.TextAreaLength>
        </S.TextAreaLabel>
        <S.TextAreaInput
          onChange={event}
          width={width}
          height={height}
          borderColor="#D3D3D3"
          placeholder="Placeholder Text"
          maxLength={200}
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
