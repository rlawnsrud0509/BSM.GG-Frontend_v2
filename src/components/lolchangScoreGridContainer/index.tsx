import * as S from "./index.css";
import LolchangUserScoreContainer from "./lolchangUserScoreContainer";
import { theme } from "@/style/base/theme/index.css";
import LolchangUserScoreLayoutContainer from "./lolchangUserScoreLayoutContainer";

const LolchanScoreGridContainer = () => {
  return (
    <div className={S.Container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
        return (
          <LolchangUserScoreLayoutContainer
            key={`dummy3${i}`}
            resultText="ㅤㅤㅤㅤㅤ"
            mainText="ㅤㅤㅤ"
            mainUnitText="ㅤ"
            containerColor={theme.secondary[400]}
            containerTextColor={theme.base.white}
          />
        );
      })}
    </div>
  );
};

export default LolchanScoreGridContainer;
