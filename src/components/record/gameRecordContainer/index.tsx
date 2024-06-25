"use client";

import * as S from "./index.css";
import GameRecordInfoContainer from "./gameRecordInfoContainer";
import GameRecordHeaderLink from "./gameRecordHeaderLink";

import { GAME_RECORD_HEADER } from "@/constants/gameRecord";
import { GameRecordInfoProperties } from "@/types/components/GameRecordInfoProperties.type";
import { GameRecordInfoContainerProperties } from "@/types/components/GameRecordInfoContainerProperties.type";

import { useEffect, useLayoutEffect, useState } from "react";
import { useGetUserRecordDataQuery } from "@/service/record/graphql";
import { useUserParams } from "@/hooks/useUserParams";
import { useObserver } from "@/hooks/useObserver";

const GameRecordContainer = () => {
  const [selectedLink, setSelectedLink] = useState(GAME_RECORD_HEADER.전체);
  const [page, setPage] = useState(0);
  const userParams = useUserParams();

  const { data } = useGetUserRecordDataQuery(`${userParams}`, page);
  const [gameData, setGameData] = useState<GameRecordInfoProperties>({
    getMatches: {
      matches: [],
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
    setGameData({
      getMatches: {
        matches: [...gameData.getMatches.matches, ...data.getMatches.matches],
      },
    });
  }, [data]);

  return (
    <div className={S.Container}>
      <div className={S.GameRecordHeader}>
        {Object.keys(GAME_RECORD_HEADER).map((e, i) => (
          <GameRecordHeaderLink
            key={`GameRecordLink${i}`}
            onClick={() => setSelectedLink(e)}
            linkText={e}
            selectedLink={selectedLink}
          />
        ))}
      </div>
      {gameData &&
        (selectedLink !== "전체"
          ? gameData.getMatches.matches
              .filter((e) => e.gameType === selectedLink)
              .map((e: GameRecordInfoContainerProperties, i: number) => {
                return (
                  <GameRecordInfoContainer key={`GameRecordInfo${i} ${selectedLink}`} {...e} />
                );
              })
          : gameData.getMatches.matches.map((e: GameRecordInfoContainerProperties, i: number) => {
              return <GameRecordInfoContainer key={`GameRecordInfo${i} ${selectedLink}`} {...e} />;
            }))}
      <div className={S.ObserveDiv} ref={DOMref} />
    </div>
  );
};

export default GameRecordContainer;
