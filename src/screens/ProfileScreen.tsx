import React from 'react';
import { useAppSelector } from '../app/hooks';
import { auth } from '../firebase';
import Avatar from '../common/Avatar';
import { selectUser } from '../features/user/userSlice';
import { transformDate } from '../features/date/transformDate';

function ProfileScreen() {
  const user: any = useAppSelector(selectUser);
  const userCreationTime = transformDate(auth.currentUser?.metadata?.creationTime);

  return (
    <div>
      <h1 className="text-2xl mb-4">My profile</h1>
      <span className="block text-sm text-gray-400">Section is under construction.</span>

      <div className="flex mt-5">
        <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
          <Avatar optionalClass="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium">{user.displayName}</h5>
            <p className="text-gray-400 text-base mb-4">
              <strong>email:</strong> {user.email}
            </p>
            <p className="text-gray-600 text-xs">Registration date: {userCreationTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
