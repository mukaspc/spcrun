import React from 'react';
import Header from '../common/Header';
import PreferencesScreen from './PreferencesScreen';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import Container from '../common/Container';
import Wrapper from '../common/Wrapper';
import { Routes, Route, Link } from 'react-router-dom';
import TrainingListScreen from './TrainingListScreen';
import AddTrainingScreen from './AddTrainingScreen';

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
                <Link to="/training-list">training list from dashboard</Link>
                <br />
                <Link to="/add-training">add</Link>
              </>
            }
          ></Route>
          <Route path="/training-list" element={<TrainingListScreen />}></Route>
          <Route path="/add-training" element={<AddTrainingScreen />}></Route>
        </Routes>
      </Wrapper>
    </Container>
  ) : (
    <PreferencesScreen />
  );
}

export default DashboardScreen;
