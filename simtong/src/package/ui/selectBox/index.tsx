import React, { useRef, useState } from "react";
import * as S from "./styles";
import arrow from "./arrow.png";

interface SelectBoxProps {
  defaultvalue?: string;
  content?: string[];
  event?: (e: React.MouseEvent) => void;
}

export default function SelectBox(props: SelectBoxProps) {
  const { defaultvalue, content, event } = props;

  const SelectBoxRef = useRef<HTMLDivElement>(null);
  const [showValue, setShowValue] = useState(defaultvalue);

  // 라벨을 클릭시 옵션 목록이 열림/닫힘
  const showOption = () => {
    if (SelectBoxRef.current) {
      if (SelectBoxRef.current.classList.contains("active"))
        SelectBoxRef.current.classList.remove("active");
      else SelectBoxRef.current.classList.add("active");
    }
  };

  const changeValue = (str: string) => {
    setShowValue(str);
  };

  return (
    <S.SelectStyle>
      <S.SelectBox ref={SelectBoxRef} onClick={showOption}>
        <S.Label>
          {showValue ? showValue : "근무지를 선택해주세요"}
          <img src={arrow} alt="" />
        </S.Label>
        <S.OptionList>
          {content?.map((str: string) => (
            <div onClick={() => changeValue(str)}>
              <li onClick={event}>{str}</li>
            </div>
          ))}
        </S.OptionList>
      </S.SelectBox>
    </S.SelectStyle>
  );
}
