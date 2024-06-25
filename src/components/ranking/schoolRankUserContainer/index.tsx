import * as S from "./index.css";
import Link from "next/link";
import Image from "next/image";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import { RankingContainerProperties } from "@/types/components/RankingContainerProperties.type";
import { getRankColor, getRankIcon, getWinRateColor, getFormattedClassNumber } from "@/utils";

const SchoolRankUserContainer = ({
  classNo,
  gameName,
  grade,
  name,
  profileIcon,
  ranking,
  soloLp,
  soloTier,
  soloWins,
  soloLoses,
  tagLine,
  studentNo,
  mostChampions,
}: RankingContainerProperties) => {
  return (
    <Link
      target="_blank"
      href={`/user/${gameName}-${tagLine}`}
      className={S.Container}
      style={assignInlineVars({
        [S.ContainerColor]: getRankColor(ranking),
      })}
    >
      <span className={S.RankText}>{getRankIcon(ranking)}</span>
      <section className={S.PlayerProfileInfoSection}>
        <div className={S.PlayerProfileImg}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}profile/${profileIcon}.png`}
            alt="profileImg"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className={S.PlayerNameInfoSection}>
          <span className={S.PlayernameText}>{gameName}</span>
          <span className={S.UsernameText}>
            {"" + grade + classNo + getFormattedClassNumber(studentNo) + " " + name}
          </span>
        </div>
      </section>
      <span className={S.TierText}>{soloTier ? soloTier + " " + soloLp + "lp" : "Unranked"}</span>
      <section className={S.MostChampionSection}>
        {mostChampions.map((e, i) => (
          <div className={S.ChampionImg} key={`rankMostChampions ${i}`}>
            {
              <Image
                alt="rankMostChampions"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}champion/${e.id}.png`}
                fill
              />
            }
          </div>
        ))}
      </section>
      <span
        className={S.WinRateText}
        style={assignInlineVars({
          [S.WinRateColor]: getWinRateColor((soloWins / (soloWins + soloLoses)) * 100),
        })}
      >
        {soloWins + soloLoses > 0
          ? Math.floor((soloWins / (soloWins + soloLoses)) * 100) + "%"
          : "-"}
      </span>
    </Link>
  );
};

export default SchoolRankUserContainer;
