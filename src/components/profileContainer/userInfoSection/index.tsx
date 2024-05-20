import { UserInfoSectionProperties } from "@/types/components/userInfoSectionProperties.type";
import * as S from "./index.css";
import { getFormattedClassNumber } from "@/utils/getFormattedClassNumber";
import { getUserPercentage } from "@/utils/getUserPercentage";

const UserinfoSection = ({
  game_name,
  tag_line,
  ranking,
  name,
  grade,
  class_no,
  student_no,
  user_count,
}: UserInfoSectionProperties) => {
  return (
    <div className={S.Container}>
      <div className={S.UserDetailInfoSection}>
        <span className={S.UserLevelText}>
          {"" + grade + class_no + getFormattedClassNumber(student_no) + " " + name}
        </span>
        <span className={S.UserRankingText}>
          교내 랭킹 {ranking}위 (상위 {getUserPercentage(ranking, user_count)})
        </span>
      </div>
      <div className={S.UserNameSection}>
        <span className={S.UserNameText}>{game_name}</span>
        <span className={S.UserTagText}>#{tag_line}</span>
      </div>
    </div>
  );
};

export default UserinfoSection;
