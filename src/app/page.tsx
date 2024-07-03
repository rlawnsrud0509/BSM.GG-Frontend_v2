import { MainLogo } from "@/style/base/svg";
import * as S from "./page.css";

import { RecordSearchInput, RegisteredSummonerContainer } from "@/components/landing";
import LolchangSummonerContainer from "@/components/landing/lolchangSummonerContainer";
import ScrollButton from "@/components/landing/scrollButton";
import RankingInfoContainer from "@/components/landing/rankingInfoContainer";

export default function Home() {
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
