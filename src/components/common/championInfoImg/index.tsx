import { ChampionInfoImgProperties } from "@/types/components/common/ChampionInfoImgProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Image from "next/image";

const ChampionInfoImg = ({ championId, level, containerSize }: ChampionInfoImgProperties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.containerSize]: `${containerSize}rem`,
      })}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}champion/${championId}.png`}
        alt="ChampionImg"
        fill
        sizes="100%"
        className={S.ChampionImage}
      />
      <div
        className={S.ChampionLevel}
        style={assignInlineVars({
          [S.positionValue]: `${(containerSize - 3) * 1}%`,
        })}
      >
        {level}
      </div>
    </div>
  );
};

export default ChampionInfoImg;
