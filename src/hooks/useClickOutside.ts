import { MouseEvent, useEffect, useState } from 'react';

export default function useClickOutside(ref: React.MutableRefObject<any>) {
  const [clickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      setClickOutside(ref.current && !ref.current.contains(e.target));
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return clickOutside;
}
