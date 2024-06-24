"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./page.css";
import { theme } from "@/style/base/theme/index.css";
import { useState } from "react";
import { useAddUserGameNameMutation } from "@/service/auth/mutation";
import { useInput } from "@/hooks/useInput";

const AdditionalInfo = () => {
  const [errorState, setErrorState] = useState(false);
  const [userName, setUserName] = useInput("");
  const [userTag, setUserTag] = useInput("");
  const { addUserGameNameMutation } = useAddUserGameNameMutation(userName, userTag, setErrorState);

  return (
    <div className={S.Container}>
      <div className={S.InputButtonSection}>
        <div className={S.InputDiv}>
          {errorState && <span className={S.errorMessage}>입력한 정보가 올바르지 않아요.</span>}
          <div className={S.InputSection}>
            <input
              className={S.NameInput}
              placeholder="hide on bush"
              style={assignInlineVars({
                [S.InputColor]: `0 0 0 0.2rem ${theme.primary[300]}`,
              })}
              onChange={(e) => {
                setUserName(e);
                setErrorState(false);
              }}
            />
            <input
              className={S.TagInput}
              placeholder="KR1"
              style={assignInlineVars({
                [S.InputColor]: `0 0 0 0.2rem ${theme.primary[300]}`,
              })}
              onChange={(e) => {
                setUserTag(e);
                setErrorState(false);
              }}
            />
          </div>
        </div>
        <button className={S.SubmitButton} onClick={() => addUserGameNameMutation()}>
          완료
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
