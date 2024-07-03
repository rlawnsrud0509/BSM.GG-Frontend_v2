import * as S from "./page.css";
import { Suspense } from "react";

import {
  GameRecordContainer,
  RankInfoContainer,
  RankInfoLayoutContainer,
} from "@/components/record";
import { ProfileContainer, ProfilePreviewLayoutContainer } from "@/components/profile";

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
