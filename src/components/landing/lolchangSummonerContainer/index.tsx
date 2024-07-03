"use client";

import { LolchangProfilePreviewContainer } from "@/components/lolchang";
import * as S from "./index.css";

const LolchangSummonerContainer = () => {
  return (
    <div className={S.Conatiner}>
      <div className={S.ContainerInfoSection}>
        <span className={S.registeredText}>이주의 롤창</span>
        <button
          className={S.DirectButton}
          onClick={() => {
            location.href = "/lolchang";
          }}
        >
          바로가기
        </button>
      </div>

      <LolchangProfilePreviewContainer />
    </div>
  );
};

export default LolchangSummonerContainer;
