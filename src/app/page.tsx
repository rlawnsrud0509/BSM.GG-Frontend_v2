import { MainLogo } from "@/style/base/svg";
import { Conatiner } from "./page.css";

import { RecordSearchInput, RegisteredSummonerContainer } from "@/components/landing";

export default function Home() {
  return (
    <div className={Conatiner}>
      <MainLogo />
      <RecordSearchInput />
      <RegisteredSummonerContainer />
    </div>
  );
}
