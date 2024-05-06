import { ChampionInfoImgProperties } from "@/types/components/ChampionInfoImgProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const ChampionInfoImg = ({ championName, level, containerSize }: ChampionInfoImgProperties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.containerSize]: `${containerSize}rem`,
      })}
    >
      <img src={championName} alt="ChampionImg" />
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
