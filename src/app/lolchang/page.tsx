import * as S from "./page.css";
import LolchangUserGameInfoContainer from "@/components/lolchang/lolchangUserGameInfoContainer";
import LolchanScoreGridContainer from "@/components/lolchang/lolchangScoreGridContainer";
import { Suspense } from "react";
import ProfilePreviewLayoutContainer from "@/components/profile/profilePreviewLayoutContainer";
import LolchangScoreGridLayoutContainer from "@/components/lolchang/lolchangScoreGridLayoutContainer";
import LolchangProfileContainer from "@/components/lolchang/lolchangProfilePreviewContainer";

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
          <LolchangProfileContainer />
        </Suspense>
        <Suspense fallback={<LolchangScoreGridLayoutContainer />}>
          <LolchanScoreGridContainer />
        </Suspense>
        <LolchangUserGameInfoContainer />
      </div>
    </div>
  );
};

export default Lolchang;
