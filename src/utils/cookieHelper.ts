const YEAR = 60 * 60 * 24 * 365;

const deleteName = (userNames: string, name: string) =>
  userNames.split('$').reduce<string[]>((acc, userName) => {
    if (userName !== name) {
      acc.push(userName);
    }
    return acc;
  }, []);

export const addCookie = (key: string, newName: string) => {
  if (getCookie(key)) {
    const userNames = getCookie(key);
    const hasName = userNames.split('$').some((userName) => userName === newName);
    // 이미 검색했던거 또 새로함
    if (hasName) {
      const newUserNames = deleteName(userNames, newName);
      const results = [newName, ...newUserNames].join('$');
      document.cookie = `${key}=${encodeURIComponent(results)}; path=/; max-age=${YEAR}`;
      return;
    }

    document.cookie = `${key}=${encodeURIComponent(newName)}$${encodeURIComponent(
      userNames
    )}; path=/; max-age=${YEAR}`;
  } else {
    document.cookie = `${key}=${encodeURIComponent(newName)}; path=/; max-age=${YEAR}`;
  }
};

export const getCookie = (key: string) => {
  const withEqualStr = document.cookie.split('; ').find((item) => item.startsWith(key));
  if (!withEqualStr) return '';

  return decodeURIComponent(withEqualStr.split('=')[1]);
};

export const deleteCookie = (key: string, delName: string) => {
  if (getCookie(key).split('$').length === 1) {
    document.cookie = `${key}= ; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    return;
  }

  const userNames = getCookie(key);
  const newUserNames = deleteName(userNames, delName);
  const results = newUserNames.join('$');

  document.cookie = `${key}=${encodeURIComponent(results)}; path=/; max-age=${YEAR}`;
};
