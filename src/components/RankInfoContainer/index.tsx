"use client";

import { useUserParams } from "@/hooks/useUserParams";
import * as S from "./index.css";
import { useGetUserFlexRankInfoQuery, useGetUserSoloRankInfoQuery } from "@/service/record/graphql";
import Image from "next/image";

const RankInfoContainer = ({ rankTypeText }: { rankTypeText: string }) => {
  const rankField = rankTypeText === "솔로랭크" ? "soloTier" : "flexTier";
  const lpField = rankTypeText === "솔로랭크" ? "soloLp" : "flexLp";

  const userParams = useUserParams();
  const { data } =
    rankTypeText === "솔로랭크"
      ? useGetUserSoloRankInfoQuery(userParams)
      : useGetUserFlexRankInfoQuery(userParams);

  return (
    <main className={S.Container}>
      <div className={S.RankTypeText}>{rankTypeText}</div>
      <section className={S.RankDetailInfoSection}>
        <div className={S.RankIcon}>
          {data.getSummoner[rankField] !== "" && (
            <Image
              src={`/images/rankImage/${String(data.getSummoner[rankField]).split(" ")[0]}.png`}
              alt="rankImage"
              fill
            />
          )}
        </div>
        <div className={S.RankTextBox}>
          {data.getSummoner[rankField] ? (
            <>
              <span className={S.RankText}>{data.getSummoner[rankField]}</span>
              <span className={S.RankPointText}>{data.getSummoner[lpField]} lp</span>
            </>
          ) : (
            <span className={S.RankText}>Unranked</span>
          )}
        </div>
      </section>
    </main>
  );
};

export default RankInfoContainer;
