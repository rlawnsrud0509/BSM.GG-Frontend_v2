import ProfilePreviewContainer from "../profilePreviewContainer";
import * as S from "./index.css";

const RegisteredSummonerContainer = () => {
  return (
    <div className={S.Conatiner}>
      <span className={S.registeredText}>등록된 소환사</span>
      <ProfilePreviewContainer />
    </div>
  );
};

export default RegisteredSummonerContainer;
