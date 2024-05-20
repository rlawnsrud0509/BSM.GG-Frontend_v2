import * as S from "./index.css";

const RankInfoLayoutContainer = () => {
  return (
    <main className={S.Container}>
      <div className={S.RankTypeText}>ㅤㅤㅤㅤ</div>
      <section className={S.RankDetailInfoSection}>
        <div className={S.RankIcon} />
        <div className={S.RankTextBox}>
          <span className={S.RankText}>ㅤㅤㅤㅤㅤㅤ</span>
          <span className={S.RankPointText}>ㅤㅤㅤㅤㅤ</span>
        </div>
      </section>
    </main>
  );
};

export default RankInfoLayoutContainer;
