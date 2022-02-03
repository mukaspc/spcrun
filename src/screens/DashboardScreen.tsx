import React from 'react';
import Header from '../common/Header';
import PreferencesScreen from './PreferencesScreen';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';

function DashboardScreen() {
  const user: any = useAppSelector(selectUser);
  const { displayName } = user;

  return displayName ? <Header /> : <PreferencesScreen />;
}

export default DashboardScreen;
