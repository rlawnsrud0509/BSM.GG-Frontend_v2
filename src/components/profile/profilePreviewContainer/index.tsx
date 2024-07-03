"use client";

import * as S from "./index.css";
import Link from "next/link";
import Image from "next/image";

import UserinfoSection from "./userInfoSection";
import { useGetSummonerbaseInfoQuery } from "@/service/summoner/graphql";

const ProfilePreviewContainer = () => {
  const { data } = useGetSummonerbaseInfoQuery();

  return (
    <Link
      className={S.Container}
      href={`user/${data.getSummoner.gameName}-${data.getSummoner.tagLine}`}
    >
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
        <div className={S.UserTierInfoSection}>
          {data.getSummoner.soloTier && (
            <div className={S.UserTierImg}>
              <Image
                src={`/images/rankImage/${data.getSummoner.soloTier.split(" ")[0]}.png`}
                alt="rankImage"
                fill
              />
            </div>
          )}
          <span className={S.UserTierText}>
            {data.getSummoner.soloTier ? data.getSummoner.soloTier : "Unranked"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProfilePreviewContainer;
