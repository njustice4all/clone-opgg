import React from 'react';

interface IFavoriteSearch {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: 관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를 받아보세요.
export default function FavoriteSearch({ setShowDropDown }: IFavoriteSearch) {
  return (
    <div>
      <div>즐겨찾기</div>
    </div>
  );
}
