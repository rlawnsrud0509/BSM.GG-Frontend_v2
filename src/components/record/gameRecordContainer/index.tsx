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

import LoadingGif from "@/assets/gif/dotLoading";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const GameRecordContainer = () => {
  const [selectedLink, setSelectedLink] = useState(GAME_RECORD_HEADER.전체);
  const [page, setPage] = useState(0);
  const [endOfRecord, setEndOfRecord] = useState(false);
  const userParams = useUserParams();

  const { data } = useGetUserRecordDataQuery(selectedLink, `${userParams}`, page);
  const [gameData, setGameData] = useState<GameRecordInfoProperties>({
    getMatches: {
      matches: [],
    },
  });

  const { isIntersecting, setIsIntersecting, DOMref } = useObserver(0);

  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 1);
      setIsIntersecting(false);
    }
    console.log(isIntersecting);
  }, [isIntersecting]);

  useLayoutEffect(() => {
    if (data)
      setGameData({
        getMatches: {
          matches: [...gameData.getMatches.matches, ...data.getMatches.matches],
        },
      });
    if (data.getMatches.matches.length === 0) {
      setEndOfRecord(true);
    }
  }, [data]);

  useLayoutEffect(() => {
    setEndOfRecord(false);
    setPage(0);
    setGameData(data);
  }, [selectedLink]);

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
        gameData.getMatches.matches.map((e: GameRecordInfoContainerProperties, i: number) => {
          return (
            <GameRecordInfoContainer
              key={`GameRecordInfo${i} ${selectedLink}`}
              {...e}
              index={i % 10}
            />
          );
        })}

      <div
        className={S.ObserveDiv}
        style={assignInlineVars({
          [S.ObserverDisplay]: endOfRecord ? "none" : "flex",
        })}
        ref={DOMref}
      >
        <LoadingGif />
      </div>
    </div>
  );
};

export default GameRecordContainer;
