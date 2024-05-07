import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import KDAavgText from "@/components/common/KDAavgText";
import { getWinRateColor } from "@/style/utils/getWinrateColor";

const ChampionDetailInfoContainer = () => {
  const dummyData = {
    Name: "트위스티트 페이트",
    played: 123,
    kill: 3,
    death: 9,
    assist: 44,
    WinRate: 43.2,
  };

  return (
    <main className={S.Container}>
      <section className={S.ChampionInfoSection}>
        <div className={S.championImg} />
        <div className={S.ChampionDetailInfoSection}>
          <span className={S.championText}>{dummyData.Name}</span>
          <span className={S.playedGameText}>{dummyData.played}게임</span>
        </div>
      </section>
      <KDAavgText type="base" {...dummyData} />
      <span
        className={S.WinRateText}
        style={assignInlineVars({
          [S.WinRateColor]: getWinRateColor(dummyData.WinRate),
        })}
      >
        {dummyData.WinRate}%
      </span>
    </main>
  );
};

export default ChampionDetailInfoContainer;
