import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { theme } from "@/style/base/theme/index.css";
import UserChampionDetailInfoSection from "@/components/common/userChampionDetailInfoSection";

const GameRecordDetailContainer = () => {
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
          [S.teamContainerColor]: theme.primary[100],
        })}
      >
        {[1, 2, 3, 4, 5].map((_, i) => (
          <UserChampionDetailInfoSection key={`TeamChampionInfo${i}`} />
        ))}
      </section>
      <section
        className={S.EnemyTeamUserListSection}
        style={assignInlineVars({
          [S.enemyTeamContainerColor]: theme.secondary[100],
        })}
      >
        {[1, 2, 3, 4, 5].map((_, i) => (
          <UserChampionDetailInfoSection key={`EnemyTeamChampionInfo${i}`} />
        ))}
      </section>
    </main>
  );
};

export default GameRecordDetailContainer;
