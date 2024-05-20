import { UserInfoSectionProperties } from "@/types/components/userInfoSectionProperties.type";
import * as S from "./index.css";

const UserinfoSection = () => {
  return (
    <div className={S.Container}>
      <div className={S.UserDetailInfoSection}>
        <span className={S.UserClassText}>ㅤㅤㅤㅤㅤ</span>
        <span className={S.UserRankingText}>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
      </div>
      <div className={S.UserNameSection}>
        <span className={S.UserNameText}>ㅤㅤㅤㅤㅤㅤㅤ</span>
        <span className={S.UserTagText}>ㅤㅤㅤㅤ</span>
      </div>
    </div>
  );
};

export default UserinfoSection;
