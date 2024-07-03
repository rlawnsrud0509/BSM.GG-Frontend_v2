import { useMutation } from "@tanstack/react-query";
import { regetMatchData } from "./api";

export const useRegetMatchDataMutation = (userInfo: string[]) => {
  const { mutate: regetMatchDataMutate, ...restMutation } = useMutation({
    mutationFn: () => regetMatchData(userInfo),
    onSuccess: () => {
      location.reload();
    },
    onError: (err: any) => {
      if (err.response.status === 429) {
        alert("현재 요청이 너무 많습니다 잠시 후 다시 시도해주세요.");
      }
    },
  });

  return { regetMatchDataMutate, ...restMutation };
};
