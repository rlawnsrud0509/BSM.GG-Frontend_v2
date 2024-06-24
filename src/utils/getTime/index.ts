export const getTime = (rowTime: number) => {
  const hour = Math.ceil(rowTime / 3600);
  const minute = Math.ceil((rowTime % 3600) / 60);
  const second = rowTime % 60;

  return hour && `${hour}시간 ` + minute && `${minute}분 ` + `${second}초`;
};
