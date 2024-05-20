import { getItem } from "@/utils/localStorage";

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${getItem("access_token")}`,
    },
  };
};
