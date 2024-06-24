import { SCHOOL_RANK_HEADER } from "@/constants/schoolRankHeader";
import * as S from "./index.css";

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
