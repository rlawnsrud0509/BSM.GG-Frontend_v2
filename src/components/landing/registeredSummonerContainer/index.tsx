"use client";

import { Suspense } from "react";
import ProfilePreviewContainer from "../../profile/profilePreviewContainer";
import ProfilePreviewLayoutContainer from "../../profile/profilePreviewLayoutContainer";
import * as S from "./index.css";
import ProfileLoginPreviewContainer from "../../profile/profileLoginPreviewContainer";
import { useLogined } from "@/hooks/useLogined";
import { useLoading } from "@/hooks/useLoading";

const RegisteredSummonerContainer = () => {
  const isLogin = useLogined();
  const isLoading = useLoading();

  return (
    <div className={S.Conatiner}>
      <span className={S.registeredText}>등록된 소환사</span>
      {isLoading ? (
        <ProfilePreviewLayoutContainer />
      ) : (
        <>
          {isLogin ? (
            <Suspense fallback={<ProfilePreviewLayoutContainer />}>
              <ProfilePreviewContainer />{" "}
            </Suspense>
          ) : (
            <ProfileLoginPreviewContainer />
          )}
        </>
      )}
    </div>
  );
};

export default RegisteredSummonerContainer;
