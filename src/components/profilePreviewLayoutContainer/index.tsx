import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";

const ProfilePreviewLayoutContainer = () => {
  return (
    <section className={S.Container}>
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg} />
        <span className={S.LevelTextBox}>ㅤㅤ</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection />
        <div className={S.UserTierInfoSection}>
          <div className={S.UserTierImg} />
          <span className={S.UserTierText}>ㅤㅤㅤㅤㅤㅤㅤㅤ</span>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreviewLayoutContainer;
