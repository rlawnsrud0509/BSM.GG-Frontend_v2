import * as S from "./page.css";
import { Suspense } from "react";

import { ProfilePreviewLayoutContainer } from "@/components/profile";
import {
  LolchangScoreGridLayoutContainer,
  LolchangUserGameInfoContainer,
  LolchangScoreGridContainer,
  LolchangProfilePreviewContainer,
} from "@/components/lolchang";

const Lolchang = () => {
  return (
    <div className={S.Container}>
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
