import ProfileContainer from "@/components/profile/profileContainer";
import * as S from "./page.css";
import RankInfoContainer from "@/components/ranking/rankInfoContainer";
import PlayedChampionListContainer from "@/components/playedChampionListContainer";
import GameRecordContainer from "@/components/gameRecordContainer";
import { Suspense } from "react";
import ProfilePreviewLayoutContainer from "@/components/profile/profilePreviewLayoutContainer";
import RankInfoLayoutContainer from "@/components/ranking/rankInfoLayoutContainer";

const UserRecord = () => {
  return (
    <main className={S.Container}>
      <Suspense fallback={<ProfilePreviewLayoutContainer />}>
        <ProfileContainer />
      </Suspense>
      <section className={S.UserRecordDetailContainer}>
        <section className={S.UserRankInfoSection}>
          <Suspense fallback={<RankInfoLayoutContainer />}>
            <RankInfoContainer rankTypeText="솔로랭크" />
          </Suspense>
          <Suspense fallback={<RankInfoLayoutContainer />}>
            <RankInfoContainer rankTypeText="자유랭크" />
          </Suspense>
          {/* <PlayedChampionListContainer /> */}
        </section>
        <section className={S.UserGameInfoSection}>
          <GameRecordContainer />
        </section>
      </section>
    </main>
  );
};

export default UserRecord;
