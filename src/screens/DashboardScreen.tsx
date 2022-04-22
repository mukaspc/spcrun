import React from 'react';
import Header from '../common/Header';
import PreferencesScreen from './PreferencesScreen';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { selectLoading } from '../features/loading/loadingSlice';
import Container from '../common/Container';
import Wrapper from '../common/Wrapper';
import { Routes, Route, Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import TrainingListScreen from './TrainingListScreen';
import AddTrainingScreen from './AddTrainingScreen';
import NewsScreen from './NewsScreen';
import NotFoundScreen from './NotFoundScreen';
import ProfileScreen from './ProfileScreen';

function DashboardScreen() {
  const user: any = useAppSelector(selectUser);
  const loading: boolean = useAppSelector(selectLoading);
  const { displayName } = user;

  return displayName ? (
    loading ? (
      <Spinner />
    ) : (
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
                  <br />
                  <Link to="/news">news</Link>
                  <br />
                  <Link to="/profile">profile</Link>
                </>
              }
            ></Route>
            <Route path="/training-list" element={<TrainingListScreen />}></Route>
            <Route path="/add-training" element={<AddTrainingScreen />}></Route>
            <Route path="/news" element={<NewsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </Wrapper>
      </Container>
    )
  ) : (
    <PreferencesScreen />
  );
}

export default DashboardScreen;
