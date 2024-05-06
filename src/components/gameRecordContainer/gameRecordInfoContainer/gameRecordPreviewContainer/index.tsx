import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import KDAText from "@/components/common/KDAText";
import KDAavgText from "@/components/common/KDAavgText";
import ArrowIcon from "@/style/base/svg/arrowIcon";
import ChampionInfoImg from "@/components/common/championInfoImg";
import ItemListBox from "@/components/common/ItemListBox";
import RunespellGridBox from "@/components/common/runespellGridbox";

const GameRecordPreviewContainer = ({ clickFn, state }: { clickFn: any; state: boolean }) => {
  return (
    <main
      className={S.Container}
      style={assignInlineVars({
        [S.containerColor]: theme.primary[200],
      })}
    >
      <section className={S.GameUserInfoContainer}>
        <section className={S.GameInfoTextSection}>
          <span
            className={S.GameTypeText}
            style={assignInlineVars({
              [S.gameTypeColor]: theme.primary[500],
            })}
          >
            솔랭
          </span>
          <span className={S.GameInfoText}>2일 전</span>
        </section>
        <section className={S.GameChampionInfoSection}>
          <ChampionInfoImg championName="아트록스" level={14} containerSize={7} />
          <RunespellGridBox runeSpellList={["d", "d", "d", "d"]} containerSize={3} />
          <div className={S.ChampionKillSection}>
            <KDAText kill={10} death={5} assist={4} type="base" />
            <KDAavgText kill={10} death={5} assist={4} type="base" />
          </div>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.KillRateText}>킬관여 70%</span>
          <span className={S.GameInfoText}>제어 와드 4</span>
          <span className={S.GameInfoText}>CS 152</span>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.GameInfoText}>승리</span>
          <span className={S.GameInfoText}>16분 18초</span>
        </section>
        <ItemListBox ItemList={["d", "d", "d", "d", "d", "d", "d"]} />
        <section className={S.GameInfoTextSection}>
          <span className={S.GameInfoText}>매치 평균</span>
          <span className={S.GameInfoText}>GrandMaster</span>
        </section>
      </section>
      <section
        className={S.TeamUserInfoContainer}
        style={assignInlineVars({
          [S.TeamContainerColor]: theme.primary[300],
        })}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return (
            <div key={`dummy1${e}`} className={S.TeamUserInfoSection}>
              <div className={S.TeamUserInfoIcon} />
              <span className={S.TeamUserNameText}>아자wfwef이팅</span>
            </div>
          );
        })}
      </section>
      <div className={S.DetailGameInfoOpenButton} onClick={() => clickFn()}>
        <ArrowIcon deg={state ? 180 : 0} />
      </div>
    </main>
  );
};

export default GameRecordPreviewContainer;
