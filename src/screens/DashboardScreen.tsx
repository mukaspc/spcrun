import React from 'react';
import Header from '../common/Header';
import PreferencesScreen from './PreferencesScreen';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import Container from '../common/Container';
import Wrapper from '../common/Wrapper';

function DashboardScreen() {
  const user: any = useAppSelector(selectUser);
  const { displayName } = user;

  return displayName ? (
    <Container>
      <Header />
      <Wrapper>{'body content'}</Wrapper>
    </Container>
  ) : (
    <PreferencesScreen />
  );
}

export default DashboardScreen;
