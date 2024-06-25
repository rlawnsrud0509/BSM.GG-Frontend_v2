import * as S from "./index.css";
import { SCHOOL_RANK_HEADER } from "@/constants/schoolRankHeader";

const SchoolRankHeaderContainer = () => {
  return (
    <div className={S.Container}>
      {SCHOOL_RANK_HEADER.map((e) => (
        <span className={S.TextBox}>{e}</span>
      ))}
    </div>
  );
};

export default SchoolRankHeaderContainer;
