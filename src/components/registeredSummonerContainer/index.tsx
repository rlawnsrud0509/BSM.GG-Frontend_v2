import ProfileContainer from "../profileContainer";
import * as S from "./index.css";

const RegisteredSummonerContainer = () => {
  return (
    <div className={S.Conatiner}>
      <span className={S.registeredText}>등록된 소환사</span>
      <ProfileContainer />
    </div>
  );
};

export default RegisteredSummonerContainer;
