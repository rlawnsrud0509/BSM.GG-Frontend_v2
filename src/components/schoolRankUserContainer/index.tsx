import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { getRankColor } from "@/style/utils/getRankColor";
import { getRankIcon } from "@/style/utils/getRankIcon";
import { getWinRateColor } from "@/style/utils/getWinrateColor";

const SchoolRankUserContainer = ({ rank }: { rank: number }) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.ContainerColor]: getRankColor(rank),
      })}
    >
      <span className={S.RankText}>{getRankIcon(rank)}</span>
      <section className={S.PlayerProfileInfoSection}>
        <div className={S.PlayerProfileImg} />
        <div className={S.PlayerNameInfoSection}>
          <span className={S.PlayernameText}>따라가라</span>
          <span className={S.UsernameText}>3106 김준경</span>
        </div>
      </section>
      <span className={S.TierText}>Platinum 2</span>
      <section className={S.MostChampionSection}>
        <div className={S.ChampionImg} />
        <div className={S.ChampionImg} />
        <div className={S.ChampionImg} />
      </section>
      <span
        className={S.WinRateText}
        style={assignInlineVars({
          [S.WinRateColor]: getWinRateColor(53),
        })}
      >
        53%
      </span>
    </div>
  );
};

export default SchoolRankUserContainer;
