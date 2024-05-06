import ChampionDetailInfoContainer from "./championDetailInfoContainer";
import * as S from "./index.css";

const PlayedChampionListContainer = () => {
  return (
    <div className={S.Container}>
      <span className={S.PlayedListText}>챔피언 목록</span>
      <div className={S.PlayedChampionListSection}>
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
        <ChampionDetailInfoContainer />
      </div>
    </div>
  );
};

export default PlayedChampionListContainer;
