import * as S from "./index.css";

const UserinfoSection = () => {
  return (
    <div className={S.Container}>
      <div className={S.UserDetailInfoSection}>
        <span className={S.UserLevelText}>3106 김준경</span>
        <span className={S.UserRankingText}>교내 랭킹 34위 (상위 28.6%)</span>
      </div>
      <div className={S.UserNameSection}>
        <span className={S.UserNameText}>따라가라</span>
        <span className={S.UserTagText}>#KR 123</span>
      </div>
    </div>
  );
};

export default UserinfoSection;
