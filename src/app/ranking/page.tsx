import SchoolRankHeaderContainer from "@/components/schoolRankHeaderContainer";
import * as S from "./page.css";
import RankInfoSection from "@/components/rankInfoSection";

const Ranking = () => {
  return (
    <div className={S.Container}>
      <span className={S.PageText}>교내랭킹</span>
      <SchoolRankHeaderContainer />
      <RankInfoSection />
    </div>
  );
};

export default Ranking;
