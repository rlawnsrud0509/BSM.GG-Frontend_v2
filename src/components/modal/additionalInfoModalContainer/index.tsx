import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import ModalLayout from "@/components/common/layouts/modalLayout";
import { AdditionalModalInfoProperties } from "@/types/components/AdditionalInfoModalProperties.type";
import ArrowIcon from "@/style/base/svg/arrowIcon";
import Link from "next/link";

const AdditionalInfoModal = ({ animationState }: AdditionalModalInfoProperties) => {
  return (
    <ModalLayout>
      <div
        className={S.Container}
        style={assignInlineVars({
          [S.ModalAnimation]: animationState
            ? `${S.OpenModalAnimation} 0.25s ease-out forwards`
            : `${S.CloseModalAniamtion} 0.25s ease-out forwards`,
        })}
      >
        <span className={S.MainText}>
          BSM.GG 가 처음이시네요!
          <br /> 소환사 정보를 등록하고 서비스를 이용해보세요!
        </span>
        <Link href="/auth/additionalInfo" className={S.AcceptButton}>
          등록하러 가기 <ArrowIcon deg={-90} />
        </Link>
      </div>
    </ModalLayout>
  );
};

export default AdditionalInfoModal;
