import { MainLogo } from "@/style/base/svg";
import { Conatiner } from "./page.css";
import RecordSearchInput from "@/components/landing/recordSearchInput";
import RegisteredSummonerContainer from "@/components/landing/registeredSummonerContainer";

export default function Home() {
  return (
    <div className={Conatiner}>
      <MainLogo />
      <RecordSearchInput />
      <RegisteredSummonerContainer />
    </div>
  );
}
