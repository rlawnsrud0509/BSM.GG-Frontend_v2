import { LolchangUserScoreContainerProerties } from "@/types/components/LolchangUserScoreConatinerProperties.type";
import * as S from "./index.css";
import { getFormattedNumber } from "@/utils/getFormattedNumber";

const LolchangUserScoreContainer = ({
  resultText,
  mainText,
  mainUnitText,
}: LolchangUserScoreContainerProerties) => {
  return (
    <div className={S.Container}>
      <span className={S.totalText}>ㅤㅤ</span>
      <section className={S.MainTextSection}>
        <span className={S.MainText}>
          {typeof mainText === "number" ? getFormattedNumber(+mainText) : mainText}
        </span>
        <span className={S.MainUnitText}>{mainUnitText}</span>
      </section>
      <span className={S.resultText}>{resultText}</span>
    </div>
  );
};

export default LolchangUserScoreContainer;
