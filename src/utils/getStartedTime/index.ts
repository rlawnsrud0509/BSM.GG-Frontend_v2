export const getStartedTime = (unixTime: number) => {
  const startedDate = new Date(unixTime * 1000);
  const currentDate = new Date();

  const seconds = Math.floor((currentDate.getTime() - startedDate.getTime()) / 1000);
  if (seconds < 60) return "방금 전";

  const minutes = seconds / 60;
  if (minutes <= 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours <= 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days <= 7) return `${Math.floor(days)}일 전`;

  const months = days / 30;
  if (months >= 12) return `${Math.floor(months / 12)}년 전`;
  else if (months >= 1) return `${Math.floor(months)}달 전`;
  else if (days >= 7) return `${Math.floor(days / 7)}주 전`;

  return `${startedDate.toLocaleDateString()}`;
};
