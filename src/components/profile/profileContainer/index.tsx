"use client";

import * as S from "./index.css";
import Image from "next/image";
import UserinfoSection from "./userInfoSection";

import { useGetUserProfileInfoQuery } from "@/service/record/graphql";
import { useUserParams } from "@/hooks/useUserParams";
import { useRouter } from "next/navigation";

const ProfileContainer = () => {
  const userParams = useUserParams();
  const router = useRouter();
  const { data } = useGetUserProfileInfoQuery(userParams);

  return (
    <section className={S.Container}>
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}profile/${data.getSummoner.profileIcon}.png`}
            alt="profileImg"
            fill
            sizes="100%"
            priority
          />
        </div>
        <span className={S.LevelTextBox}>Lv {data.getSummoner.level}</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection {...data} />
        <div className={S.UserRecordReloadSection}>
          <button className={S.UserRecordReloadButton} onClick={() => router.refresh()}>
            전적 갱신
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileContainer;
