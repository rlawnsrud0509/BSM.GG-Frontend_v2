import { instance } from "@/api";
import { authorization } from "@/api/authorization";

export const postAuthCode = async (auth_code: string) => {
  const data = await instance.post("user", { auth_code });
  return { data };
};

export const postGameName = async (game_name: string, tag_line: string) => {
  const data = await instance.post(
    "riot/summoner",
    { game_name, tag_line: tag_line.trim() },
    authorization(),
  );
  return { data };
};
