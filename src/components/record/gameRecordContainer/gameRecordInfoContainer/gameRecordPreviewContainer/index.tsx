import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import {
  KDAText,
  KDAavgText,
  ChampionInfoImg,
  ItemListBox,
  RunespellGridBox,
} from "@/components/common";
import ArrowIcon from "@/style/base/svg/arrowIcon";
import { getAverageTier, getStartedTime, getTime } from "@/utils";
import { GameRecordPreviewContainerProperties } from "@/types/components/GameRecordPreviewContainerProperties.type";

import Image from "next/image";
import { useUserParams } from "@/hooks/useUserParams";

const GameRecordPreviewContainer = ({
  index = 0,
  ...matchData
}: GameRecordPreviewContainerProperties) => {
  const params = useUserParams();
  const userGameName = decodeURIComponent(params[0].split("-")[0]);
  const userTagLine = decodeURIComponent(params[0].split("-")[1]);

  return (
    <main
      className={S.Container}
      style={assignInlineVars({
        [S.containerColor]: matchData.isWin ? theme.primary[200] : theme.secondary[250],
        [S.ContainerAnimation]: `${S.ShowRankingAnimation} 0.2s ${index / 20}s forwards`,
      })}
    >
      <section className={S.GameUserInfoContainer}>
        <section className={S.GameInfoTextSection}>
          <span
            className={S.GameTypeText}
            style={assignInlineVars({
              [S.gameTypeColor]: matchData.isWin ? theme.primary[500] : theme.secondary[500],
            })}
          >
            {matchData.gameType}
          </span>
          <span className={S.GameInfoText}>{getStartedTime(matchData.gameStartedAt)}</span>
        </section>
        <section className={S.GameChampionInfoSection}>
          <ChampionInfoImg
            championId={matchData.participants[matchData.userIndex].champion.id}
            level={matchData.participants[matchData.userIndex].championLevel}
            containerSize={7}
          />
          <RunespellGridBox
            runeSpellList={[
              matchData.participants[matchData.userIndex].spell1,
              matchData.participants[matchData.userIndex].spell2,
              matchData.participants[matchData.userIndex].mainPerk,
              matchData.participants[matchData.userIndex].subPerk,
            ]}
            containerSize={3}
          />
          <div className={S.ChampionKillSection}>
            <KDAText
              kill={matchData.participants[matchData.userIndex].kills}
              death={matchData.participants[matchData.userIndex].deaths}
              assist={matchData.participants[matchData.userIndex].assists}
              type="base"
            />
            <KDAavgText
              kill={matchData.participants[matchData.userIndex].kills}
              death={matchData.participants[matchData.userIndex].deaths}
              assist={matchData.participants[matchData.userIndex].assists}
              type="base"
            />
          </div>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.KillRateText}>
            킬관여 {matchData.participants[matchData.userIndex].killRate}%
          </span>
          <span className={S.GameInfoText}>
            제어 와드 {matchData.participants[matchData.userIndex].visionWard}
          </span>
          <span className={S.GameInfoText}>
            CS {matchData.participants[matchData.userIndex].cs}
          </span>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.GameInfoText}>{matchData.isWin ? "승리" : "패배"}</span>
          <span className={S.GameInfoText}>{getTime(matchData.gameDuration)}</span>
        </section>
        <ItemListBox
          itemList={matchData.participants[matchData.userIndex].items}
          ward={matchData.participants[matchData.userIndex].ward}
        />
        <section className={S.GameInfoTextSection}>
          <span className={S.GameInfoText}>매치 평균</span>
          <span className={S.GameInfoText}>
            {getAverageTier(matchData.participants.map((e) => e.soloPoint))}
          </span>
        </section>
      </section>
      <section
        className={S.TeamUserInfoContainer}
        style={assignInlineVars({
          [S.teamContainerColor]: matchData.isWin ? theme.primary[300] : theme.secondary[300],
        })}
      >
        {matchData.participants.map((e, i) => {
          return (
            <div key={`participants${i}`} className={S.TeamUserInfoSection}>
              <div className={S.TeamUserInfoIcon}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}champion/${e.champion.id}.png`}
                  alt="teamUserInfoIcon"
                  fill
                />
              </div>
              <span
                className={
                  e.gameName === userGameName && e.tagLine === userTagLine
                    ? S.CurrentUserNameText
                    : S.TeamUserNameText
                }
              >
                {e.gameName}
              </span>
            </div>
          );
        })}
      </section>
      <div
        className={S.DetailGameInfoOpenButton}
        style={assignInlineVars({
          [S.detailGameInfoOpenButtonColor]: matchData.isWin
            ? theme.primary[500]
            : theme.secondary[500],
        })}
        onClick={() => matchData.clickFn()}
      >
        <ArrowIcon deg={matchData.state ? 180 : 0} />
      </div>
    </main>
  );
};

export default GameRecordPreviewContainer;
