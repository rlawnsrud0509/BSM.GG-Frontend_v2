import { theme } from "@/style/base/theme/index.css";

export const getWinRateColor = (winrate: number) => {
  return winrate >= 50 ? theme.primary[600] : theme.secondary[600];
};
