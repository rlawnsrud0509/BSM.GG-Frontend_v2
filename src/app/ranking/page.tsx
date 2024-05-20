import SchoolRankHeaderContainer from "@/components/schoolRankHeaderContainer";
import * as S from "./page.css";
import SchoolRankUserContainer from "@/components/schoolRankUserContainer";

const Ranking = () => {
  return (
    <div className={S.Container}>
      <span className={S.PageText}>교내랭킹</span>
      <SchoolRankHeaderContainer />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((e, i) => (
        <SchoolRankUserContainer rank={e} key={`dummy2${i}`} />
      ))}
    </div>
  );
};

export default Ranking;
