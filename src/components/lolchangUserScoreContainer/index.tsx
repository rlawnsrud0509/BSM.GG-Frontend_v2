import { LolchangUserScoreContainerProerties } from "@/types/components/LolchangUserScoreConatinerProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { getFormattedNumber } from "@/utils/getFormattedNumber";

const LolchangUserScoreContainer = ({
  resultText,
  mainText,
  mainUnitText,
  containerColor,
  containerTextColor,
}: LolchangUserScoreContainerProerties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.ContainerColor]: containerColor,
        [S.ContainerTextColor]: containerTextColor,
      })}
    >
      <span className={S.totalText}>총</span>
      <section className={S.MainTextSection}>
        <span className={S.MainText}>{getFormattedNumber(+mainText)}</span>
        <span className={S.MainUnitText}>{mainUnitText}</span>
      </section>
      <span className={S.resultText}>{resultText}</span>
    </div>
  );
};

export default LolchangUserScoreContainer;
