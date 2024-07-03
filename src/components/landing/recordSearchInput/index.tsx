"use client";

import React, { useState } from "react";
import * as S from "./index.css";
import { SearchIcon } from "@/style/base/svg";
import { useRouter } from "next/navigation";

const RecordSearchInput = () => {
  const [inputData, setInputData] = useState("");
  const router = useRouter();

  return (
    <div className={S.Container}>
      <section className={S.InputSection}>
        <input
          className={S.SearchInput}
          placeholder="hide on bush #kr1"
          onChange={(e) => setInputData(e.target.value)}
        />
        <div
          className={S.SearchIconBox}
          onClick={() =>
            router.push(`/user/${inputData.split("#")[0].trim()}-${inputData.split("#")[1].trim()}`)
          }
        >
          <SearchIcon />
        </div>
      </section>
    </div>
  );
};

export default RecordSearchInput;
