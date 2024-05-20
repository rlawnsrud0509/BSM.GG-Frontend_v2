import { useMutation } from "@tanstack/react-query";
import { postAuthCode, postGameName } from "./api";
import { setItem } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const useGetUserStatusMutation = (auth_code: string, openModal: () => void) => {
  const router = useRouter();

  const { mutate: getUserStatusMutate, ...restMutation } = useMutation({
    mutationFn: () => postAuthCode(auth_code),
    onSuccess: (res) => {
      setItem("access_token", res.data.data.token);

      if (res.data.data.game_name) {
        setItem("game_name", res.data.data.game_name);
        setItem("tag_line", res.data.data.tag_line);
        router.push("/");
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
    onSuccess: (res) => {
      setItem("game_name", res.data.data.game_name);
      setItem("tag_line", res.data.data.tag_line);
      router.push("/");
    },
    onError: (err: any) => {
      if (err.response.status === 404) setErrorState(true);
      else {
        alert("알 수 없는 문제가 발생하였습니다. 다시 시도해주세요.");
      }
    },
  });

  return { addUserGameNameMutation, ...restMutation };
};
