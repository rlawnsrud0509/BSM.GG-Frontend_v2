export const getUserPercentage = (ranking: number, totalUser: number) => {
  return ranking === totalUser ? "100%" : `${(((ranking - 1) / totalUser) * 100).toFixed(2)}%`;
};
