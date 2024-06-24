"use client";

import { useGetRankingInfoQuery } from "@/service/ranking/graphql";
import SchoolRankUserContainer from "../schoolRankUserContainer";
import * as S from "./index.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { useObserver } from "@/hooks/useObserver";
import { RankingInfoProperties } from "@/types/components/RankingInfoProperties.type";

const RankInfoSection = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetRankingInfoQuery(page);
  const [rankingData, setRankingData] = useState<RankingInfoProperties>({
    getRanking: {
      summonerResponseDto: [],
    },
  });

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
  }, [data]);

  return (
    <div className={S.Container}>
      {rankingData.getRanking.summonerResponseDto.map((e, i) => (
        <SchoolRankUserContainer {...e} key={`RankContainer${i}`} />
      ))}
      <div className={S.ObserverContainer} ref={DOMref} />
    </div>
  );
};

export default RankInfoSection;
