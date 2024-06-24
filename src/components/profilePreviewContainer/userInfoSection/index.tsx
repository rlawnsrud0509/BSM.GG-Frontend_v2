import { UserInfoSectionProperties } from "@/types/components/userInfoSectionProperties.type";
import * as S from "./index.css";
import { getFormattedClassNumber } from "@/utils/getFormattedClassNumber";
import { getUserPercentage } from "@/utils/getUserPercentage";

const UserinfoSection = ({
  getSummoner: { gameName, tagLine, ranking, name, grade, classNo, studentNo, userCount },
}: UserInfoSectionProperties) => {
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
