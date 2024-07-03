import { instance } from "@/api";

export const regetMatchData = async (userInfo: string[]) => {
  const data = await instance.post("/match", {
    gameName: userInfo[0].split("-")[0],
    tagLine: userInfo[0].split("-")[1],
  });

  return { data };
};
