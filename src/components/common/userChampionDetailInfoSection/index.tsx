import ItemListBox from "../ItemListBox";
import KDAText from "../KDAText";
import KDAavgText from "../KDAavgText";
import ChampionInfoImg from "../championInfoImg";
import * as S from "./index.css";
import { UserChampionDetailInfoProperties } from "@/types/components/UserChampionDetailInfoProperties.type";
import Image from "next/image";
import RunespellGridBox from "../runespellGridbox";

const UserChampionDetailInfoSection = (particiPantsData: UserChampionDetailInfoProperties) => {
  return (
    <div className={S.Container}>
      <section className={S.UserDetailInfoSection}>
        <ChampionInfoImg
          championId={particiPantsData.champion.id}
          level={particiPantsData.championLevel}
          containerSize={3}
        />
        <RunespellGridBox
          runeSpellList={[
            particiPantsData.spell1,
            particiPantsData.spell2,
            particiPantsData.mainPerk,
            particiPantsData.subPerk,
          ]}
          containerSize={1.5}
        />
        <div className={S.UserDetailInfoBox}>
          <span className={S.UsernameText}>{particiPantsData.gameName}</span>
          <span className={S.UserRankInfoText}>
            {particiPantsData.soloTier ? particiPantsData.soloTier : "UNRANKED"}
          </span>
        </div>
      </section>
      <section className={S.KDAInfoSection}>
        <KDAText
          kill={particiPantsData.kills}
          death={particiPantsData.deaths}
          assist={particiPantsData.assists}
          type="small"
        />
        <KDAavgText
          kill={particiPantsData.kills}
          death={particiPantsData.deaths}
          assist={particiPantsData.assists}
          type="small"
        />
      </section>
      <span className={S.DamageText}>DMG {particiPantsData.damage}</span>
      <section className={S.WardInfoSection}>
        <div className={S.WardImg}>
          {particiPantsData.ward.id !== 0 ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}item/${particiPantsData.ward.id}.png`}
              alt="WardImg"
              fill
              sizes="100%"
            />
          ) : (
            <div className={S.WardImg} />
          )}
        </div>
        {particiPantsData.visionScore} / {particiPantsData.visionWard}
      </section>
      <ItemListBox itemList={particiPantsData.items} ward={particiPantsData.ward} />
    </div>
  );
};

export default UserChampionDetailInfoSection;
