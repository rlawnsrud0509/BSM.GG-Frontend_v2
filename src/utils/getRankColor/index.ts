import { theme } from "@/style/base/theme/index.css";

export const getRankColor = (rank: number) => {
  switch (true) {
    case rank === 1:
      return theme.primary[400];
    case rank === 2:
      return theme.primary[300];
    case rank === 3:
      return theme.primary[200];
    case rank >= 14:
      return theme.gray[50];
    case rank >= 9:
      return theme.primary[50];
    case rank >= 4:
      return theme.primary[100];
  }
};
