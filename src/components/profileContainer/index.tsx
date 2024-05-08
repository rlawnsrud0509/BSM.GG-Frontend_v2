import { Column } from "@/style/ui/Flex";
import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";

const ProfileContainer = () => {
  return (
    <section className={S.Container}>
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg} />
        <span className={S.LevelTextBox}>Lv 557</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection />
        <div className={S.UserRecordReloadSection}>
          <button className={S.UserRecordReloadButton}>전적 갱신</button>
          <span className={S.UserRecordReloadText}>3초 후에 다시 시도해주세요.</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileContainer;
