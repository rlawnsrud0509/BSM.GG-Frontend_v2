import * as S from "./page.css";
import { RankInfoSection, SchoolRankHeaderContainer } from "@/components/ranking";

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
