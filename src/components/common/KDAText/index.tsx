import { KDATextProperties } from "@/types/components/common/KDATextProperties.type";
import * as S from "./index.css";

const KDAText = ({ kill, death, assist, type }: KDATextProperties) => {
  return (
    <div className={type === "base" ? S.BaseContainer : S.SmallContainer}>
      {kill} / <span className={S.DeathText}>&nbsp;{death}&nbsp;</span> / {assist}
    </div>
  );
};

export default KDAText;
