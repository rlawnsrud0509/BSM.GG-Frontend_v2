"use client";

import { useUserParams } from "@/hooks/useUserParams";
import * as S from "./index.css";
import { useGetUserFlexRankInfoQuery, useGetUserSoloRankInfoQuery } from "@/service/record/graphql";

const RankInfoContainer = ({ rankTypeText }: { rankTypeText: string }) => {
  const rankField = rankTypeText === "솔로랭크" ? "solo_tier" : "solo_lp";
  const lpField = rankTypeText === "솔로랭크" ? "solo_lp" : "flex_lp";

  const userParams = useUserParams();
  const { data } =
    rankTypeText === "솔로랭크"
      ? useGetUserSoloRankInfoQuery(userParams)
      : useGetUserFlexRankInfoQuery(userParams);

  return (
    <main className={S.Container}>
      <div className={S.RankTypeText}>{rankTypeText}</div>
      <section className={S.RankDetailInfoSection}>
        <div className={S.RankIcon} />
        <div className={S.RankTextBox}>
          {data.summoner.summoner_types[0][rankField] ? (
            <>
              <span className={S.RankText}>{data.summoner.summoner_types[0][rankField]}</span>
              <span className={S.RankPointText}>{data.summoner.summoner_types[0][lpField]} lp</span>
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
