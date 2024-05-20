"use client";

import { useUserParams } from "@/hooks/useUserParams";
import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";
import { useGetUserProfileInfoQuery } from "@/service/record/graphql";

const ProfileContainer = () => {
  const userParams = useUserParams();
  const { data } = useGetUserProfileInfoQuery(userParams);

  return (
    <section className={S.Container}>
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg} />
        <span className={S.LevelTextBox}>Lv {data.summoner.summoner_types[0].level}</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection
          user_count={data.summoner.user_count}
          {...data.summoner.summoner_types[0]}
        />
        <div className={S.UserRecordReloadSection}>
          <button className={S.UserRecordReloadButton}>전적 갱신</button>
          <span className={S.UserRecordReloadText}>3초 후에 다시 시도해주세요.</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileContainer;
