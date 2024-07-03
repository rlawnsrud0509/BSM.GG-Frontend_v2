import { svgProperties } from "@/types/svg/svgProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import circleLoading from "./loading.gif";
import Image from "next/image";

const CircleLoadingGif = ({ width = 2, height = 2, deg = 0 }: svgProperties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.Gifwidth]: `${width}rem`,
        [S.Gifheight]: `${height}rem`,
        [S.Gifdegree]: `${deg}deg`,
      })}
    >
      <Image src={circleLoading} alt="circleLoadingGif" fill objectFit="cover" />
    </div>
  );
};

export default CircleLoadingGif;
