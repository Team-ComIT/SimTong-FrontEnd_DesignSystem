import React, { useState } from "react";
import * as S from "./style";
import successImg from "./success.png";
import errorImg from "./error.png";
import showImg from "./show.png";
import hideImg from "./blind.png";

interface InputProps {
  passwordInput?: boolean;
  width?: string;
  errorMessge?: string;
  placeholder: string;
  event?: () => {};
}

export default function Input(props: InputProps) {
  const { width, placeholder, passwordInput, errorMessge, event } = props;

  const [password, setPassword] = useState<boolean>(passwordInput || false);
  const [showError, setShowError] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  const handleClickHidePassword = () => {
    setHide(!hide);
  };

  return (
    <>
      <S.InputStyle>
        {password ? (
          <S.Password>
            <S.Input
              onChange={event}
              width={width || "250px"}
              borderColor={showError ? "#DC3035" : "#D3D3D3"}
              type={hide ? "password" : "text"}
              placeholder={placeholder}
              maxLength={200}
            />
            <S.Show
              onClick={handleClickHidePassword}
              src={hide ? showImg : hideImg}
              alt=""
            />
          </S.Password>
        ) : (
          <S.Input
            onChange={event}
            width={width || "250px"}
            borderColor={showError ? "#DC3035" : "#D3D3D3"}
            placeholder={placeholder}
            maxLength={200}
          />
        )}
        {showError ? (
          <S.InputError>
            <img src={errorImg} alt="error" />
            <span>{errorMessge || <>에러가 일어났습니다</>}</span>
          </S.InputError>
        ) : (
          <></>
        )}
      </S.InputStyle>
    </>
  );
}
