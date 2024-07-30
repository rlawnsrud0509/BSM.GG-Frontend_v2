import { useMutation } from "@tanstack/react-query";
import { postAuthCode, postGameName } from "./api";
import { setItem } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const useGetUserStatusMutation = (auth_code: string, openModal: () => void) => {
  const { mutate: getUserStatusMutate, ...restMutation } = useMutation({
    mutationFn: () => postAuthCode(auth_code),
    onSuccess: (res) => {
      setItem("access_token", res.data.data.accessToken);

      if (res.data.data.gameName) {
        location.href = "/";
      } else {
        openModal();
      }
    },
    onError: () => {
      alert("알 수 없는 문제가 발생하였습니다. 다시 시도해주세요.");
    },
  });

  return { getUserStatusMutate, ...restMutation };
};

export const useAddUserGameNameMutation = (
  game_name: string,
  tag_line: string,
  setErrorState: Dispatch<SetStateAction<boolean>>,
) => {
  const router = useRouter();

  const { mutate: addUserGameNameMutation, ...restMutation } = useMutation({
    mutationFn: () => postGameName(game_name, tag_line),
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
    onError: (err: any) => {
      if (err.response.status === 404) setErrorState(true);
      else if (err.response.status === 429) alert("현재 요청이 너무 많습니다 다시 시도해주세요.");
      else alert("알 수 없는 문제가 발생하였습니다. 다시 시도해주세요.");
    },
  });

  return { addUserGameNameMutation, ...restMutation };
};
