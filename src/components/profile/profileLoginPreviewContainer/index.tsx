import Link from "next/link";
import * as S from "./index.css";

const ProfileLoginPreviewContainer = () => {
  return (
    <div className={S.Container}>
      <Link className={S.LinkText} href={process.env.NEXT_PUBLIC_AUTH_URL as string}>
        로그인
      </Link>
      &nbsp;하고 롤 계정을 추가해보세요!
    </div>
  );
};

export default ProfileLoginPreviewContainer;
