import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { getFormattedNumber } from "@/utils";
import { LolchangScoreMappingData } from "@/constants/lolchang";

const LolchangUserScoreContainer = ({
  mainText,
  mainKey,
}: {
  mainText: number | string;
  mainKey: string;
}) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.ContainerColor]: LolchangScoreMappingData[mainKey].containerColor,
        [S.ContainerTextColor]: LolchangScoreMappingData[mainKey].ContainerTextColor,
      })}
    >
      <span className={S.totalText}>총</span>
      <section className={S.MainTextSection}>
        <span className={S.MainText}>{getFormattedNumber(+mainText)}</span>
        <span className={S.MainUnitText}>{LolchangScoreMappingData[mainKey].mainUnitText}</span>
      </section>
      <span className={S.resultText}>{LolchangScoreMappingData[mainKey].resultText}</span>
    </div>
  );
};

export default LolchangUserScoreContainer;
