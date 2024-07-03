import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./index.css";
import { KDATextProperties } from "@/types/components/common/KDATextProperties.type";
import { theme } from "@/style/base/theme/index.css";

const KDAavgText = ({ kill, death, assist, type }: KDATextProperties) => {
  const KDA = Math.round(((kill + assist) / death) * 10) / 10;

  return (
    <div className={type === "base" ? S.BaseContainer : S.SmallContainer}>
      <div
        className={S.KDAavgText}
        style={assignInlineVars({
          [S.KDAavgTextColor]: KDA >= 3 ? theme.primary[500] : theme.gray[500],
        })}
      >
        평점 {KDA}
      </div>
    </div>
  );
};

export default KDAavgText;
