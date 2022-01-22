const YEAR = 60 * 60 * 24 * 365;

export const addCookie = (key: string, newName: string) => {
  if (getCookie(key)) {
    const userNames = getCookie(key);
    const hasName = userNames.split('$').some((userName) => userName === newName);
    if (hasName) return;

    document.cookie = `${key}=${encodeURIComponent(newName)}$${encodeURIComponent(
      userNames
    )}; max-age=${YEAR}`;
  } else {
    document.cookie = `${key}=${encodeURIComponent(newName)}; max-age=${YEAR}`;
  }
};

export const getCookie = (key: string) => {
  const withEqualStr = document.cookie.split('; ').find((item) => item.startsWith(key));
  if (!withEqualStr) return '';

  return decodeURIComponent(withEqualStr.split('=')[1]);
};

export const deleteCookie = (key: string, idx: number) => {
  if (getCookie(key).split('$').length === 1) {
    document.cookie = `${key}= ; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    return;
  }

  const names = getCookie(key).split('$');
  names.splice(idx, 1);
  document.cookie = `${key}=${encodeURIComponent(names.join('$'))}; max-age=${YEAR}`;
};
