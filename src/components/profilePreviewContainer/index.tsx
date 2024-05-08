import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";
import Link from "next/link";

const ProfilePreviewContainer = () => {
  return (
    <Link className={S.Container} href={"/user/123"}>
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg} />
        <span className={S.LevelTextBox}>Lv 557</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection />
        <div className={S.UserTierInfoSection}>
          <div className={S.UserTierImg} />
          <span className={S.UserTierText}>Platinum 2</span>
        </div>
      </div>
    </Link>
  );
};

export default ProfilePreviewContainer;
