"use client";

import { useModal } from "@/hooks/useModal";
import * as S from "./page.css";
import AdditionalInfoModal from "@/components/modal/additionalInfoModalContainer";
import { useGetUserStatusMutation } from "@/service/auth/mutation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
  const params = useSearchParams();
  const { modalState, animationState, closeModal, openModal } = useModal(false);
  const { getUserStatusMutate } = useGetUserStatusMutation(params.get("code") as string, openModal);

  useEffect(() => {
    getUserStatusMutate();
  }, []);

  return (
    <div className={S.Container}>
      <span className={S.RedirectText}>로그인 시도 중 입니다 ...</span>

      {modalState && (
        <AdditionalInfoModal animationState={animationState} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Redirect;
