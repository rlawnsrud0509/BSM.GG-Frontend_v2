"use client";

import { useGetRankingInfoQuery } from "@/service/ranking/graphql";
import * as S from "./index.css";
import { SchoolRankUserContainer } from "@/components/ranking";

const RankingInfoContainer = () => {
  const { data } = useGetRankingInfoQuery(0);

  return (
    <div className={S.Conatiner}>
      <div className={S.ContainerInfoSection}>
        <span className={S.registeredText}>교내랭킹</span>
        <button
          className={S.DirectButton}
          onClick={() => {
            location.href = "/ranking";
          }}
        >
          바로가기
        </button>
      </div>

      {data.getRanking.summonerResponseDto.map((e, i) => (
        <>
          {i < 3 && (
            <SchoolRankUserContainer
              lastIndex={
                data.getRanking.summonerResponseDto[data.getRanking.summonerResponseDto.length - 1]
                  .ranking
              }
              index={i % 10}
              {...e}
              key={`RankContainer${i}`}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default RankingInfoContainer;
