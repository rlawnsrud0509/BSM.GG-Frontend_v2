import { MainLogo } from "@/style/base/svg";
import * as S from "./page.css";

import { RecordSearchInput, RegisteredSummonerContainer } from "@/components/landing";
import LolchangSummonerContainer from "@/components/landing/lolchangSummonerContainer";
import RankingInfoContainer from "@/components/landing/rankingInfoContainer";
import dynamic from "next/dynamic";

export default function Home() {
  const ScrollButton = dynamic(() => import("@/components/landing/scrollButton"), { ssr: false });

  return (
    <div className={S.Conatiner}>
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
