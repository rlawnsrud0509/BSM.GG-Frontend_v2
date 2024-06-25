import * as S from "./index.css";
import { getFormattedClassNumber, getUserPercentage } from "@/utils";
import { LolchangSummonerInfoProperties } from "@/types/components/LolchangSummonerInfoProperties.type";

const UserinfoSection = ({
  getChang: {
    summonerInfo: { gameName, tagLine, ranking, name, grade, classNo, studentNo, userCount },
  },
}: LolchangSummonerInfoProperties) => {
  return (
    <div className={S.Container}>
      <div className={S.UserDetailInfoSection}>
        <span className={S.UserLevelText}>
          {"" + grade + classNo + getFormattedClassNumber(studentNo) + " " + name}
        </span>
        <span className={S.UserRankingText}>
          교내 랭킹 {ranking}위 (상위 {getUserPercentage(ranking, userCount)})
        </span>
      </div>
      <div className={S.UserNameSection}>
        <span className={S.UserNameText}>{gameName}</span>
        <span className={S.UserTagText}>#{tagLine}</span>
      </div>
    </div>
  );
};

export default UserinfoSection;
