import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Input from '../common/Input';
import Button from '../common/Button';
import { selectUser, login } from '../features/user/userSlice';
import checkedShield from '../assets/img/checked-shield.png';
import { auth, storage } from '../firebase';
import { updateProfile } from 'firebase/auth';
import { showErrorMessage } from '../translations/firebaseErrors';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';

interface Event<T = EventTarget> {
  target: T;
}

function PreferencesScreen() {
  let file: any = {};
  const dispatch = useDispatch();
  const user: any = useAppSelector(selectUser);
  const [name, setName] = useState<string>('');
  const [validateInfo, setValidateInfo] = useState<string>('');
  const storageRef = ref(storage, `users/${user.uid}/profile.jpg`);

  const updateLoggedProfile = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    if (!name) {
      setValidateInfo(showErrorMessage('empty-data'));
      return;
    }

    updateProfileName();

    if (file.name) {
      uploadPhotoAndUpdateProfile();
    }
  };

  const uploadPhotoAndUpdateProfile = () => {
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((downloadURL) => {
        updateProfilePicture(downloadURL);
      });
    });
  };

  const updateProfilePicture = (profilePicUrl: string) => {
    updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: profilePicUrl,
    })
      .then(() => {
        dispatch(
          login({
            displayName: name,
            photoURL: profilePicUrl,
          }),
        );
      })
      .catch((err) => {
        setValidateInfo(showErrorMessage(err.code));
      });
  };

  const updateProfileName = () => {
    updateProfile(auth.currentUser!, {
      displayName: name,
    })
      .then(() => {
        dispatch(
          login({
            displayName: name,
          }),
        );
      })
      .catch((err) => {
        setValidateInfo(showErrorMessage(err.code));
      });
  };

  const chooseFile = (event: Event<HTMLInputElement>): void => {
    file = event.target.files && event.target.files[0];
  };

  return (
    <section className="flex justify-center md:items-center h-screen">
      <article className="w-full md:w-1/2 lg:w-1/3 max-w-screen-sm rounded-lg p-4 mt-5 m-2 md:m-0 bg-white drop-shadow-sm">
        <img src={checkedShield} alt="" className="absolute -top-3 right-2" />

        <h1 className="text-xl medium">Welcome, runner 🏃</h1>
        <span className="block mt-2 text-sm text-gray-400">
          Almost finish. Fill in the details below and let&apos;s get started.
        </span>

        <form className="mt-6">
          <Input
            masked={false}
            type="text"
            name="name"
            label="Your name"
            placeholder="Type your full name"
            requiredField
            autoFillOff
            onChange={(e) => setName(e.target.value)}
          />
          <Input masked={false} type="file" name="file" label="Your picture" onChange={(e) => chooseFile(e)} />

          {validateInfo && (
            <div className="mt-2">
              <span className="text-red-400 text-sm">{validateInfo}</span>
            </div>
          )}

          <div className="mt-10">
            <Button theme="primary" optionalClass="mr-3" onClick={updateLoggedProfile}>
              Update profile
            </Button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default PreferencesScreen;
