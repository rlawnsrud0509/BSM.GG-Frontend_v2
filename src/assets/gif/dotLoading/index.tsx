import { svgProperties } from "@/types/svg/svgProperties.type";
import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import LoadingGifImg from "@/assets/gif/dotLoading/loading.gif";
import Image from "next/image";

const DotLoadingGif = ({ width = 5, height = 5, deg = 0 }: svgProperties) => {
  return (
    <div
      className={S.Container}
      style={assignInlineVars({
        [S.Gifwidth]: `${width}rem`,
        [S.Gifheight]: `${height}rem`,
        [S.Gifdegree]: `${deg}deg`,
      })}
    >
      <Image src={LoadingGifImg} alt="loadingGif" fill objectFit="cover" />
    </div>
  );
};

export default DotLoadingGif;
