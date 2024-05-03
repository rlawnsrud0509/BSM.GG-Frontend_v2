import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import KDAavgText from "@/components/common/KDAavgText";

const ChampionDetailInfoContainer = () => {
  const dummyData = {
    Name: "트위스티트 페이트",
    kill: 3,
    death: 9,
    assist: 44,
    WinRate: 43.2,
  };

  return (
    <main className={S.Container}>
      <section className={S.ChampionInfoSection}>
        <div className={S.championImg} />
        <span className={S.championText}>{dummyData.Name}</span>
      </section>
      <KDAavgText {...dummyData} />
      <span
        className={S.WinRateText}
        style={assignInlineVars({
          [S.WinRateColor]: dummyData.WinRate >= 50 ? theme.primary[400] : theme.secondary[400],
        })}
      >
        {dummyData.WinRate}%
      </span>
    </main>
  );
};

export default ChampionDetailInfoContainer;
