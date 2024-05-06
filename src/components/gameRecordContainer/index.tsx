"use client";

import { useState } from "react";
import GameRecordHeaderLink from "./gameRecordHeaderLink";
import * as S from "./index.css";
import { GAME_RECORD_HEADER } from "@/constants/gameRecordHeader";
import GameRecordInfoContainer from "./gameRecordInfoContainer";

const GameRecordContainer = () => {
  const [selectedLink, setSelectedLink] = useState(GAME_RECORD_HEADER.전체);

  return (
    <div className={S.Container}>
      <div className={S.gameRecordHeader}>
        {Object.keys(GAME_RECORD_HEADER).map((e, i) => (
          <GameRecordHeaderLink
            key={`GameRecordLink${i}`}
            onClick={() => setSelectedLink(e)}
            linkText={e}
            selectedLink={selectedLink}
          />
        ))}
      </div>
      <GameRecordInfoContainer />
      <GameRecordInfoContainer />
      <GameRecordInfoContainer />
      <GameRecordInfoContainer />
      <GameRecordInfoContainer />
      <GameRecordInfoContainer />
    </div>
  );
};

export default GameRecordContainer;
