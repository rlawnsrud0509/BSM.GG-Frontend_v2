import { MainLogo } from "@/style/base/svg";
import * as S from "./page.css";

import { RecordSearchInput, RegisteredSummonerContainer } from "@/components/landing";
import LolchangSummonerContainer from "@/components/landing/lolchangSummonerContainer";
import RankingInfoContainer from "@/components/landing/rankingInfoContainer";
import dynamic from "next/dynamic";
import Metadata from "@/components/common/metadata";

export default function Home() {
  const ScrollButton = dynamic(() => import("@/components/landing/scrollButton"), { ssr: false });

  return (
    <div className={S.Conatiner}>
      <Metadata
        title="BSM.GG - 부산소마고 전적검색 플랫폼"
        description="부산소마고 대표 롤창 김민석 & 김준경의 작품입니다."
      />
      <ScrollButton />
      <div className={S.FlexshrinkCoverBox}>
        <MainLogo />
      </div>
      <div className={S.InputAnimationBox}>
        <RecordSearchInput />
      </div>
      <RegisteredSummonerContainer />
      <RankingInfoContainer />
      <LolchangSummonerContainer />
    </div>
  );
}
