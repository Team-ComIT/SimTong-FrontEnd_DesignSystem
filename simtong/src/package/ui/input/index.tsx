import React, { useState } from "react";
import * as S from "./style";
import successImg from "./success.png";
import errorImg from "./error.png";
import showImg from "./show.png";
import hideImg from "./blind.png";

export default function Input() {
  const error: boolean = false;
  const success: boolean = false;
  const password: boolean = true;
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
          <S.Input placeholder="Placeholder Text" maxLength={200} />
        )}
        {error ? (
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
