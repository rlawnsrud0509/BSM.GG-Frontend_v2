import { KDATextProperties } from "@/types/components/KDATextProperties.type";
import * as S from "./index.css";

const KDAText = ({ kill, death, assist }: KDATextProperties) => {
  return (
    <div className={S.Container}>
      {kill} / <span className={S.DeathText}>&nbsp;{death}&nbsp;</span> / {assist}
    </div>
  );
};

export default KDAText;
