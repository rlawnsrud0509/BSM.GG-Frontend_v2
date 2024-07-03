"use client";

import * as S from "./index.css";
import LolchangUserScoreLayoutContainer from "./lolchangUserScoreLayoutContainer";

const LolchangScoreGridLayoutContainer = () => {
  return (
    <div className={S.Container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => {
        return <LolchangUserScoreLayoutContainer key={`lolchangLayout${i}`} />;
      })}
    </div>
  );
};

export default LolchangScoreGridLayoutContainer;
