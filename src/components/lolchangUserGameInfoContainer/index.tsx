import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { LolchangUserGameInfoContainerProperties } from "@/types/components/LolchangUserGameInfoContainerProperties.type";

const LolchangUserGameInfoContainer = ({
  winGame,
  defeatGame,
}: LolchangUserGameInfoContainerProperties) => {
  return (
    <div className={S.Container}>
      <div className={S.WinrateBar}>
        <div
          className={S.WinBar}
          style={assignInlineVars({
            [S.WinBarWidth]: `${(winGame / (winGame + defeatGame)) * 100}%`,
          })}
        >
          {winGame}승
        </div>
        <div className={S.DefeatBar}>{defeatGame}패</div>
      </div>
      <span className={S.JudgeText}>한줄평</span>
      <div className={S.OneSentenceJudge}>" 롤 대신 더 생산적인 활동을 하는 것이 어떨까요? "</div>
    </div>
  );
};

export default LolchangUserGameInfoContainer;
