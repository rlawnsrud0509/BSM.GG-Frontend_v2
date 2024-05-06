import React from "react";
import * as S from "./index.css";
import { SearchIcon } from "@/style/base/svg";

const RecordSearchInput = () => {
  return (
    <div className={S.Container}>
      <section className={S.InputSection}>
        <input className={S.SearchInput} placeholder=" '소환사명 + #태그' 로 검색하세요!" />
        <div className={S.SearchIconBox}>
          <SearchIcon />
        </div>
      </section>
    </div>
  );
};

export default RecordSearchInput;
