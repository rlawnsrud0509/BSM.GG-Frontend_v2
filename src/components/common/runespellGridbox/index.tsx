import { RunespellGridboxProperties } from "@/types/components/common/RunespellGridboxProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const RunespellGridBox = ({ runeSpellList, containerSize }: RunespellGridboxProperties) => {
  return (
    <div className={S.Container}>
      {runeSpellList.map((e, i) => (
        <img
          key={`RuneSpell${i}`}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${i < 2 ? "spell" : "perk"}/${e.id}.png`}
          alt="Rune & Spell Img"
          className={S.SummonerSpellImg}
          style={assignInlineVars({
            [S.containerSize]: `${i !== 3 ? containerSize : containerSize * 0.6}rem`,
          })}
        />
      ))}
    </div>
  );
};

export default RunespellGridBox;
