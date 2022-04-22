import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
interface AvatarProps {
  optionalClass?: string;
}

function Avatar({ optionalClass }: AvatarProps) {
  const user: any = useAppSelector(selectUser);
  const { photoURL, displayName } = user;
  const userInitial = displayName[0].toUpperCase();

  return photoURL ? (
    <img
      src={photoURL}
      className={`w-full h-full object-cover ${optionalClass ? optionalClass : ''}`}
      alt={displayName}
    />
  ) : (
    <div
      className={`w-full h-full bg-gradient-to-r from-green-600 to-green-500 text-white medium flex justify-center items-center text-sm ${
        optionalClass ? optionalClass : ''
      }`}
    >
      {userInitial}
    </div>
  );
}

export default Avatar;
