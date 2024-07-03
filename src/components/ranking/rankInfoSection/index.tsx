"use client";

import * as S from "./index.css";
import { RankingInfoProperties } from "@/types/components/RankingInfoProperties.type";
import SchoolRankUserContainer from "..//schoolRankUserContainer";

import { useGetRankingInfoQuery } from "@/service/ranking/graphql";
import { useEffect, useLayoutEffect, useState } from "react";
import { useObserver } from "@/hooks/useObserver";
import LoadingGif from "@/assets/gif/dotLoading";

const RankInfoSection = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetRankingInfoQuery(page);
  const [rankingData, setRankingData] = useState<RankingInfoProperties>({
    getRanking: {
      summonerResponseDto: [],
    },
  });

  const [endOfRecord, setEndOfRecord] = useState(false);
  const { isIntersecting, setIsIntersecting, DOMref } = useObserver(0.3);

  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 1);
      setIsIntersecting(false);
    }
  }, [isIntersecting]);

  useLayoutEffect(() => {
    setRankingData({
      getRanking: {
        summonerResponseDto: [
          ...rankingData.getRanking.summonerResponseDto,
          ...data.getRanking.summonerResponseDto,
        ],
      },
    });
    if (data.getRanking.summonerResponseDto.length < 10) {
      setEndOfRecord(true);
    }
  }, [data]);

  return (
    <div className={S.Container}>
      {rankingData.getRanking.summonerResponseDto.map((e, i) => (
        <SchoolRankUserContainer
          lastIndex={
            rankingData.getRanking.summonerResponseDto[
              rankingData.getRanking.summonerResponseDto.length - 1
            ].ranking
          }
          index={i % 10}
          {...e}
          key={`RankContainer${i}`}
        />
      ))}
      <div className={S.ObserverContainer}>
        {!endOfRecord && (
          <div ref={DOMref}>
            <LoadingGif />
          </div>
        )}
      </div>
    </div>
  );
};

export default RankInfoSection;
