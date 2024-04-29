import { MainLogo } from "@/style/base/svg";
import { Conatiner } from "./page.css";
import RecordSearchInput from "@/components/recordSearchInput";

export default function Home() {
  return (
    <div className={Conatiner}>
      <MainLogo />
      <RecordSearchInput />
    </div>
  );
}
