import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import UserChampionDetailInfoSection from "@/components/common/userChampionDetailInfoSection";
import { GameRecordInfoContainerProperties } from "@/types/components/GameRecordInfoContainerProperties.type";
import { useUserParams } from "@/hooks/useUserParams";

const GameRecordDetailContainer = (matchData: GameRecordInfoContainerProperties) => {
  const userParams = useUserParams();
  const playerTeam = matchData.participants
    .map((e) => (e.gameName === userParams[0].split("-")[0] ? e.team : null))
    .filter((e) => e !== null)[0];

  return (
    <main
      className={S.Container}
      style={assignInlineVars({
        [S.containerColor]: theme.primary[100],
      })}
    >
      <section
        className={S.TeamUserListSection}
        style={assignInlineVars({
          [S.teamContainerColor]: playerTeam === "RED" ? theme.primary[100] : theme.secondary[100],
        })}
      >
        {matchData.participants
          .map((e, i) => {
            return e.team === "RED" ? (
              <UserChampionDetailInfoSection {...e} key={`TeamChampionInfo${i}`} />
            ) : null;
          })
          .filter((e) => e !== null)}
      </section>
      <section
        className={S.EnemyTeamUserListSection}
        style={assignInlineVars({
          [S.enemyTeamContainerColor]:
            playerTeam === "BLUE" ? theme.primary[100] : theme.secondary[100],
        })}
      >
        {matchData.participants
          .map((e, i) => {
            return e.team === "BLUE" ? (
              <UserChampionDetailInfoSection {...e} key={`EnemyChampionInfo${i}`} />
            ) : null;
          })
          .filter((e) => e !== null)}
      </section>
    </main>
  );
};

export default GameRecordDetailContainer;
