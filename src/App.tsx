import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import Spinner from './common/Spinner';

function App() {
  const [checkUserOnStart, setCheckUserOnStart] = useState(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          }),
        );
      } else {
        dispatch(logout());
      }
    });

    setTimeout(() => setCheckUserOnStart(true), 1000);
  }, []);

  return <main className="app">{checkUserOnStart ? !user ? <LoginScreen /> : <DashboardScreen /> : <Spinner />}</main>;
}

export default App;
