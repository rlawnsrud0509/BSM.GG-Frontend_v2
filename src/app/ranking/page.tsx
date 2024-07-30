import Metadata from "@/components/common/metadata";
import * as S from "./page.css";
import { RankInfoSection, SchoolRankHeaderContainer } from "@/components/ranking";

const Ranking = () => {
  return (
    <div className={S.Container}>
      <Metadata title="BSM.GG - 교내랭킹" description="부산소마고 내 롤 교내랭킹을 확인해보세요!" />
      <span className={S.PageText}>교내랭킹</span>
      <SchoolRankHeaderContainer />
      <RankInfoSection />
    </div>
  );
};

export default Ranking;
