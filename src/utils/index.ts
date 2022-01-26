import dayjs from 'dayjs';

export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const toFixed = (target: number, digit: number) => {
  return isNaN(target) ? '0' : target.toFixed(digit);
};

export const calWinRate = (win: number, lose: number) => {
  if (win + lose === 0) return 0;
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
    str: `${toFixed(kda, 2)}:1`,
    color,
  };
};

export const calScore = (score: number) => {
  let color = '#5e5e5e';
  if (score >= 3 && score < 4) {
    color = '#2daf7f';
  } else if (score >= 4 && score < 5) {
    color = '#1f8ecd';
  } else if (score >= 5) {
    color = '#e19205';
  }

  return color;
};

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
export const calDisplayDate = (createdAt: number) => {
  const now = dayjs();
  const seconds = Math.round(Math.abs(now.diff(dayjs(createdAt))) / 1000);

  const [value, unit] =
    seconds < HOUR
      ? [Math.round(seconds / MINUTE), '분 전']
      : seconds < DAY
      ? [Math.round(seconds / HOUR), '시간 전']
      : [Math.round(seconds / DAY), '일 전'];

  if (value === 1 && unit === '시간 전') {
    return '한시간 전';
  }

  return unit === '방금' ? '방금' : `${value}${unit}`;
};

export const getItemArray = (items: { imageUrl: string }[]) => {
  const newItems: any = [...items];
  newItems.splice(items.length - 1, 1);

  for (let i = 0; i < 6; i++) {
    if (!newItems[i]) {
      newItems.push('empty' as any);
    }
  }

  return {
    newItems,
    wards: items[items.length - 1],
  };
};
