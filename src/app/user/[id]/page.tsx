import ProfileContainer from "@/components/profileContainer";
import * as S from "./page.css";
import RankInfoContainer from "@/components/RankInfoContainer";
import PlayedChampionListContainer from "@/components/playedChampionListContainer";
import GameRecordContainer from "@/components/gameRecordContainer";

const UserRecord = () => {
  return (
    <main className={S.Container}>
      <ProfileContainer />
      <section className={S.UserRecordDetailContainer}>
        <section className={S.UserRankInfoSection}>
          <RankInfoContainer rankTypeText="솔로랭크" />
          <RankInfoContainer rankTypeText="자유랭크" />
          <PlayedChampionListContainer />
        </section>
        <section className={S.UserGameInfoSection}>
          <GameRecordContainer />
        </section>
      </section>
    </main>
  );
};

export default UserRecord;
