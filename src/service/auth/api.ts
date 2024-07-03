import { instance } from "@/api";
import { authorization } from "@/api/authorization";

export const postAuthCode = async (authCode: string) => {
  const data = await instance.post("user", { authCode });
  return { data };
};

export const postGameName = async (gameName: string, tagLine: string) => {
  const data = await instance.post(
    "summoner",
    { gameName, tagLine: tagLine.trim() },
    authorization(),
  );
  return { data };
};
