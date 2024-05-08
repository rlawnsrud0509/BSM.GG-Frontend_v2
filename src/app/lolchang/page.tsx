import ProfilePreviewContainer from "@/components/profilePreviewContainer";
import * as S from "./page.css";
import LolchangUserScoreContainer from "@/components/lolchangUserScoreContainer";
import { theme } from "@/style/base/theme/index.css";
import ReloadIcon from "@/style/base/svg/reloadIcon";
import LolchangUserGameInfoContainer from "@/components/lolchangUserGameInfoContainer";

const Lolchang = () => {
  return (
    <div className={S.Container}>
      <section className={S.HeaderTextSection}>
        <span className={S.PageText}>이주의 롤창</span>
        <section className={S.LolChangTextSection}>
          <span className={S.LolChangText}>지난 한 주간 이 유저는...</span>
          <button className={S.ReloadButton}>
            <ReloadIcon />
            통계 새로고침
          </button>
        </section>
      </section>

      <div className={S.LolchangGridContainer}>
        <ProfilePreviewContainer />
        <div className={S.LolchangScoreGridContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
            return (
              <LolchangUserScoreContainer
                key={`dummy3${i}`}
                resultText="죽었습니다"
                mainText={`${e * 1234}`}
                mainUnitText="번"
                containerColor={theme.secondary[400]}
                containerTextColor={theme.base.white}
              />
            );
          })}
        </div>
        <LolchangUserGameInfoContainer winGame={15} defeatGame={10} />
      </div>
    </div>
  );
};

export default Lolchang;
