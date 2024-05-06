import ItemListBox from "../ItemListBox";
import KDAText from "../KDAText";
import KDAavgText from "../KDAavgText";
import ChampionInfoImg from "../championInfoImg";
import * as S from "./index.css";

const UserChampionDetailInfoSection = () => {
  return (
    <div className={S.Container}>
      <section className={S.UserDetailInfoSection}>
        <ChampionInfoImg championName="아트록스" level={10} containerSize={3} />
        <div className={S.UserDetailInfoBox}>
          <span className={S.UsernameText}>아자아자화이팅</span>
          <span className={S.UserRankInfoText}>Platinum 2</span>
        </div>
      </section>
      <section className={S.KDAInfoSection}>
        <KDAText kill={10} death={5} assist={4} type="small" />
        <KDAavgText kill={10} death={5} assist={4} type="small" />
      </section>
      <span className={S.DamageText}>딜량 52390</span>
      <section className={S.WardInfoSection}>
        <img alt="WardImg" className={S.WardImg} />
        12 / 3
      </section>
      <ItemListBox ItemList={["1", "2", "3", "4", "4", "5", "6"]} />
    </div>
  );
};

export default UserChampionDetailInfoSection;
