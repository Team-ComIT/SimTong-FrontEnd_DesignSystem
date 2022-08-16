import React, { useRef } from "react";
import * as S from "./styles";
import arrow from "./arrow.png";

interface SelectBoxProps {
  defaultvalue?: string;
  content?: string[];
}

export default function SelectBox(props: SelectBoxProps) {
  const { defaultvalue, content } = props;

  const SelectBoxRef = useRef<HTMLDivElement>(null);

  // 라벨을 클릭시 옵션 목록이 열림/닫힘
  const showOption = () => {
    if (SelectBoxRef.current) {
      if (SelectBoxRef.current.classList.contains("active"))
        SelectBoxRef.current.classList.remove("active");
      else SelectBoxRef.current.classList.add("active");
    }
  };

  return (
    <S.SelectStyle>
      <S.SelectBox ref={SelectBoxRef} onClick={showOption}>
        <S.Label>
          {defaultvalue}
          <img src={arrow} alt="" />
        </S.Label>
        <S.OptionList>
          {content?.map((str: string) => (
            <li>{str}</li>
          ))}
        </S.OptionList>
      </S.SelectBox>
    </S.SelectStyle>
  );
}
