import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import KDAText from "@/components/common/KDAText";
import KDAavgText from "@/components/common/KDAavgText";
import ArrowIcon from "@/style/base/svg/arrowIcon";
import ChampionInfoImg from "@/components/common/championInfoImg";
import ItemListBox from "@/components/common/ItemListBox";
import RunespellGridBox from "@/components/common/runespellGridbox";
import { getTime } from "@/utils/getTime";
import { getAverageTier } from "@/utils/getAverageTier";
import { GameRecordPreviewContainerProperties } from "@/types/components/GameRecordPreviewContainerProperties.type";
import { getStartedTime } from "@/utils/getStatedTime";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const GameRecordPreviewContainer = (matchData: GameRecordPreviewContainerProperties) => {
  const [userIndex, setUserIndex] = useState(0);
  const params = useParams().name as string;
  const userGameName = decodeURIComponent(params.split("-")[0]);
  const userTagLine = decodeURIComponent(params.split("-")[1]);

  useEffect(() => {
    matchData.participants.forEach((e, i) => {
      e.gameName === userGameName && e.tagLine === userTagLine ? setUserIndex(i) : null;
    });
  }, []);

  return (
    <main
      className={S.Container}
      style={assignInlineVars({
        [S.containerColor]: matchData.isWin ? theme.primary[200] : theme.secondary[250],
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
            championId={matchData.participants[userIndex].champion.id}
            level={matchData.participants[userIndex].championLevel}
            containerSize={7}
          />
          <RunespellGridBox
            runeSpellList={[
              matchData.participants[userIndex].spell1,
              matchData.participants[userIndex].spell2,
              matchData.participants[userIndex].mainPerk,
              matchData.participants[userIndex].subPerk,
            ]}
            containerSize={3}
          />
          <div className={S.ChampionKillSection}>
            <KDAText
              kill={matchData.participants[userIndex].kills}
              death={matchData.participants[userIndex].deaths}
              assist={matchData.participants[userIndex].assists}
              type="base"
            />
            <KDAavgText
              kill={matchData.participants[userIndex].kills}
              death={matchData.participants[userIndex].deaths}
              assist={matchData.participants[userIndex].assists}
              type="base"
            />
          </div>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.KillRateText}>
            킬관여 {matchData.participants[userIndex].killRate}%
          </span>
          <span className={S.GameInfoText}>
            제어 와드 {matchData.participants[userIndex].visionWard}
          </span>
          <span className={S.GameInfoText}>CS {matchData.participants[userIndex].cs}</span>
        </section>
        <section className={S.GameInfoTextSection}>
          <span className={S.GameInfoText}>{matchData.isWin ? "승리" : "패배"}</span>
          <span className={S.GameInfoText}>{getTime(matchData.gameDuration)}</span>
        </section>
        <ItemListBox
          itemList={matchData.participants[userIndex].items}
          ward={matchData.participants[userIndex].ward}
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
