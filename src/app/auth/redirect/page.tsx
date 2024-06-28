"use client";

import * as S from "./page.css";
import { AddtionalInfoModal } from "@/components/modal";

import { useGetUserStatusMutation } from "@/service/auth/mutation";
import { useSearchParams } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import { Suspense, useEffect } from "react";

const RedirectComponent = () => {
  const params = useSearchParams();
  const { modalState, animationState, closeModal, openModal } = useModal(false);
  const { getUserStatusMutate } = useGetUserStatusMutation(params.get("code") as string, openModal);

  useEffect(() => {
    getUserStatusMutate();
  }, []);

  return (
    <div className={S.Container}>
      <span className={S.RedirectText}>로그인 시도 중 입니다 ...</span>
      {modalState && <AddtionalInfoModal animationState={animationState} />}
    </div>
  );
};

const Redirect = () => (
  <Suspense fallback={<>{/*추가 필요*/}</>}>
    <RedirectComponent />
  </Suspense>
);

export default Redirect;
