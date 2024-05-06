import { Column } from "@/style/ui/Flex";
import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";

const ProfileContainer = () => {
  return (
    <section className={S.Container}>
      <div className={S.ProfileImg}></div>
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
