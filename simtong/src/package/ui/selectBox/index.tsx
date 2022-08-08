import * as S from "./styles";

export default function SelectBox() {
  const arr: string[] = ["근무지를 선택해주세요", "1", "2", "3"];
  return (
    <>
      <S.SelectStyle>
        {arr.map((str) => (
          <option value={str}>{str}</option>
        ))}
      </S.SelectStyle>
    </>
  );
}
