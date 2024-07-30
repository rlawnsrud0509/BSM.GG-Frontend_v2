import * as S from "./page.css";
import { Suspense } from "react";

import { ProfilePreviewLayoutContainer } from "@/components/profile";
import {
  LolchangScoreGridLayoutContainer,
  LolchangUserGameInfoContainer,
  LolchangScoreGridContainer,
  LolchangProfilePreviewContainer,
} from "@/components/lolchang";
import Metadata from "@/components/common/metadata";

const Lolchang = () => {
  return (
    <div className={S.Container}>
      <Metadata
        title="BSM.GG - 이주의 롤창"
        description="이 주에 가장 롤을 많이한 사람을 누구일까요?"
      />
      <section className={S.HeaderTextSection}>
        <span className={S.PageText}>이주의 롤창</span>
        <section className={S.LolChangTextSection}>
          <span className={S.LolChangText}>지난 한 주간 이 학생은...</span>
        </section>
      </section>

      <div className={S.LolchangGridContainer}>
        <Suspense fallback={<ProfilePreviewLayoutContainer />}>
          <LolchangProfilePreviewContainer />
        </Suspense>
        <Suspense fallback={<LolchangScoreGridLayoutContainer />}>
          <LolchangScoreGridContainer />
        </Suspense>
        <LolchangUserGameInfoContainer />
      </div>
    </div>
  );
};

export default Lolchang;
