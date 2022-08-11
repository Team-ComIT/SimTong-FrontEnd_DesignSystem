import React from "react";
import * as S from "./style";
import errorImg from "./error.png";

export default function TextArea() {
  const error: boolean = false;

  return (
    <>
      <S.TextAreaStyle>
        <S.TextAreaLabel>
          <span>Label</span>
          <S.TextAreaLength>0/200</S.TextAreaLength>
        </S.TextAreaLabel>
        <S.TextAreaInput placeholder="Placeholder Text" maxLength={200} />
        {error ? (
          <S.TextAreaError>
            <img src={errorImg} alt="error" />
            <span>Error Message</span>
          </S.TextAreaError>
        ) : (
          <></>
        )}
      </S.TextAreaStyle>
    </>
  );
}
