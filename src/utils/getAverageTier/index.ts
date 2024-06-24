import { TIER } from "@/constants/rank";

export const getAverageTier = (tierPointArray: number[]) => {
  const tierPoint = tierPointArray.reduce((sum, current) => {
    return +sum + Math.floor(+current / 1000) * 1000;
  });

  let length = 0;
  tierPointArray.forEach((e) => (e ? length++ : null));

  const rankPoint = Math.floor(tierPoint / length / 100) * 100;

  return rankPoint <= 0 ? "Unranked" : TIER[Math.floor(rankPoint / 1000) * 1000];
};
