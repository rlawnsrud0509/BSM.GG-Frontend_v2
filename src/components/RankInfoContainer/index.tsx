import * as S from "./index.css";

const RankInfoContainer = ({ rankTypeText }: { rankTypeText: string }) => {
  return (
    <main className={S.Container}>
      <div className={S.RankTypeText}>{rankTypeText}</div>
      <section className={S.RankDetailInfoSection}>
        <div className={S.RankIcon} />
        <div className={S.RankTextBox}>
          <span className={S.RankText}>Diamond 3</span>
          <span className={S.RankPointText}>99 lp</span>
        </div>
      </section>
    </main>
  );
};

export default RankInfoContainer;
