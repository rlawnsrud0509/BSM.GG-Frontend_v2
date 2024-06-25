"use client";

import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { OnelineReview } from "@/constants/lolchang";

import { useGetLolchangInfoQuery } from "@/service/lolchang/graphql";
import { useEffect, useState } from "react";

const LolchangUserGameInfoContainer = () => {
  const { data } = useGetLolchangInfoQuery();
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * OnelineReview.length + 1));
  }, []);

  return (
    <div className={S.Container}>
      <div className={S.WinrateBar}>
        <div
          className={S.WinBar}
          style={assignInlineVars({
            [S.WinBarWidth]: `${
              (data.getChang.changInfo.winGames /
                (data.getChang.changInfo.winGames + data.getChang.changInfo.loseGames)) *
              100
            }%`,
          })}
        >
          {data.getChang.changInfo.winGames}승
        </div>
        <div className={S.DefeatBar}>{data.getChang.changInfo.loseGames}패</div>
      </div>
      <span className={S.JudgeText}>한줄평</span>
      <div className={S.OneSentenceJudge}>
        {randomIndex ? OnelineReview[randomIndex - 1] : "ㅤ"}
      </div>
    </div>
  );
};

export default LolchangUserGameInfoContainer;
