export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const calWinRate = (win: number, lose: number) => {
  return Math.floor((win * 100) / (win + lose));
};
