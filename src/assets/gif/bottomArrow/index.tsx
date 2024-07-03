import { svgProperties } from "@/types/svg/svgProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import bottomArrowImg from "./bottomArrow.gif";
import Image from "next/image";

const BottomArrowGif = ({ width = 5, height = 5, deg = 0 }: svgProperties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.Gifwidth]: `${width}rem`,
        [S.Gifheight]: `${height}rem`,
        [S.Gifdegree]: `${deg}deg`,
      })}
    >
      <Image src={bottomArrowImg} alt="bottomArrowGif" fill objectFit="cover" />
    </div>
  );
};

export default BottomArrowGif;
