"use client";

import { useGetSummonerbaseInfoQuery } from "@/service/summoner/graphql";
import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";
import Link from "next/link";
import { useGetLolchangProfileInfoQuery } from "@/service/lolchang/graphql";

interface ProfileContainerProperties {
  type: "summoner" | "this_week" | "record";
}

const ProfilePreviewContainer = ({ type = "summoner" }: ProfileContainerProperties) => {
  const { data } =
    type === "summoner" ? useGetSummonerbaseInfoQuery() : useGetLolchangProfileInfoQuery();

  return (
    <Link
      className={S.Container}
      href={`user/${data[type].summoner_types[0].game_name}+${data[type].summoner_types[0].tag_line}`}
    >
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg} />
        <span className={S.LevelTextBox}>Lv {data[type].summoner_types[0].level}</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection user_count={data[type].user_count} {...data[type].summoner_types[0]} />
        <div className={S.UserTierInfoSection}>
          <div className={S.UserTierImg} />
          <span className={S.UserTierText}>
            {data[type].solo_tier ? data[type].solo_tier : "Unranked"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProfilePreviewContainer;
