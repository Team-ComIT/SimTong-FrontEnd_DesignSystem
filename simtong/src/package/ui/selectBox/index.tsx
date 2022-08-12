import React, { useState } from "react";
import * as S from "./styles";

interface selectBoxType {
  width: string;
  optionArray: string[];
}

export default function SelectBox(props: selectBoxType) {
  const { width, optionArray } = props;
  const [array, setArray] = useState<string[]>(optionArray);

  return (
    <>
      <S.SelectStyle>
        {array.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </S.SelectStyle>
    </>
  );
}
