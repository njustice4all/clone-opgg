export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const calWinRate = (win: number, lose: number) => {
  return Math.floor((win * 100) / (win + lose));
};

// - 3.00:1 >= #2daf7f
// - 4.00:1 >= #1f8ecd
// - 5.00:1 >= #e19205
export const calKDA = (kill: number, death: number, assist: number) => {
  const kda = (kill + assist) / death;
  let color = '#5e5e5e';
  if (kda >= 3 && kda < 4) {
    color = '#2daf7f';
  } else if (kda >= 4 && kda < 5) {
    color = '#1f8ecd';
  } else if (kda >= 5) {
    color = '#e19205';
  }

  return {
    str: `${kda.toFixed(2)}:1`,
    color,
  };
};
