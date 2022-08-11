import React, { useState } from "react";
import * as S from "./style";
import successImg from "./success.png";
import errorImg from "./error.png";
import showImg from "./show.png";
import hideImg from "./blind.png";

export default function Input() {
  const success: boolean = false;
  const password: boolean = false;
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
              borderColor={showError ? "#DC3035" : "#D3D3D3"}
              type={hide ? "password" : "text"}
              placeholder="Placeholder Text"
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
            borderColor={showError ? "#DC3035" : "#D3D3D3"}
            placeholder="Placeholder Text"
            maxLength={200}
          />
        )}
        {showError ? (
          <S.InputError>
            <img src={errorImg} alt="error" />
            <span>Error Message</span>
          </S.InputError>
        ) : (
          <></>
        )}
        {success ? (
          <S.InputSuccess>
            <img src={successImg} alt="error" />
            <span>Error Message</span>
          </S.InputSuccess>
        ) : (
          <></>
        )}
      </S.InputStyle>
    </>
  );
}
