"use client";

import * as S from "./index.css";
import UserinfoSection from "./userInfoSection";
import Link from "next/link";
import { useGetLolchangSummonerQuery } from "@/service/lolchang/graphql";
import Image from "next/image";

const LolchangProfilePreviewContainer = () => {
  const { data } = useGetLolchangSummonerQuery();

  return (
    <Link
      className={S.Container}
      href={`user/${data.getChang.summonerInfo.gameName}-${data.getChang.summonerInfo.tagLine}`}
    >
      <section className={S.ProfileImgSection}>
        <div className={S.ProfileImg}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}profile/${data.getChang.summonerInfo.profileIcon}.png`}
            alt="profileImg"
            fill
            sizes="100%"
            priority
          />
        </div>
        <span className={S.LevelTextBox}>Lv {data.getChang.summonerInfo.level}</span>
      </section>
      <div className={S.userProfileSection}>
        <UserinfoSection {...data} />
        <div className={S.UserTierInfoSection}>
          <div className={S.UserTierImg}>
            {data.getChang.summonerInfo.soloTier !== "" && (
              <Image
                src={`/images/rankImage/${
                  String(data.getChang.summonerInfo.soloTier).split(" ")[0]
                }.png`}
                alt="rankImage"
                fill
              />
            )}
          </div>
          <span className={S.UserTierText}>
            {data.getChang.summonerInfo.soloTier ? data.getChang.summonerInfo.soloTier : "Unranked"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LolchangProfilePreviewContainer;
