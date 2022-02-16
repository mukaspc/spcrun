import { onAuthStateChanged, signOut } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import Spinner from './common/Spinner';

function App() {
  const [checkUserOnStart, setCheckUserOnStart] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
      } else {
        signOut(auth).then(() => {
          dispatch(logout());
          navigate('/');
        });
      }
    });

    setTimeout(() => setCheckUserOnStart(true), 1000);
  }, [auth]);

  return (
    <main className="app bg-gray-200 w-full h-full">
      {checkUserOnStart ? !user ? <LoginScreen /> : <DashboardScreen /> : <Spinner />}
    </main>
  );
}

export default App;
