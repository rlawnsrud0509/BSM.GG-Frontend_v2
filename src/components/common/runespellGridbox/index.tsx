import { RunespellGridboxProperties } from "@/types/components/RunespellGridboxProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const RunespellGridBox = ({ runeSpellList, containerSize }: RunespellGridboxProperties) => {
  return (
    <div className={S.Container}>
      {runeSpellList.map((e, i) => (
        <img
          key={`RuneSpell${i}`}
          src={e}
          alt="Rune & Spell Img"
          className={S.SummonerSpellImg}
          style={assignInlineVars({
            [S.containerSize]: `${containerSize}rem`,
          })}
        />
      ))}
    </div>
  );
};

export default RunespellGridBox;
