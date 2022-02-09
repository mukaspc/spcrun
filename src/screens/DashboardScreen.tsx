import React from 'react';
import Header from '../common/Header';
import PreferencesScreen from './PreferencesScreen';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import Container from '../common/Container';
import Wrapper from '../common/Wrapper';
import { Routes, Route, Link } from 'react-router-dom';
import TreningListScreen from './TreningListScreen';
import AddTreningScreen from './AddTreningScreen';

function DashboardScreen() {
  const user: any = useAppSelector(selectUser);
  const { displayName } = user;

  return displayName ? (
    <Container>
      <Header />
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/trening-list">trening list from dashboard</Link>
                <br />
                <Link to="/add-trening">add</Link>
              </>
            }
          ></Route>
          <Route path="/trening-list" element={<TreningListScreen />}></Route>
          <Route path="/add-trening" element={<AddTreningScreen />}></Route>
        </Routes>
      </Wrapper>
    </Container>
  ) : (
    <PreferencesScreen />
  );
}

export default DashboardScreen;
