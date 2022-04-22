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
                  <h1 className="text-2xl mb-4">Dashboard 🥷</h1>
                  <span className="block text-sm text-gray-400">Hello {displayName}, before or after training?</span>

                  <div className="sm:flex justify-center mt-5 mb-4">
                    <div className="relative group rounded-lg shadow-lg bg-white w-full sm:w-1/3 sm:mr-5 hover:bg-gray-50 border-green-500 border-2">
                      <div className="absolute inline-block top-0 right-2 bottom-auto left-auto -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full z-10">
                        Start here
                      </div>
                      <Link to="/add-training">
                        <div className="p-6 h-full">
                          <h5 className="text-gray-900 text-xl font-medium mb-2 group-hover:text-green-500">
                            ✅ Add training
                          </h5>
                          <p className="text-gray-400 text-base">Record your progress</p>
                        </div>
                      </Link>
                    </div>
                    <div className="group rounded-lg shadow-lg bg-white w-full sm:w-1/3 mt-5 sm:mt-0 sm:mr-5 hover:bg-gray-50">
                      <Link to="/training-list">
                        <div className="p-6 h-full">
                          <h5 className="text-gray-900 text-xl font-medium mb-2 group-hover:text-green-500">
                            📊 Trainings list
                          </h5>
                          <p className="text-gray-400 text-base">See how your training is going</p>
                        </div>
                      </Link>
                    </div>
                    <div className="group rounded-lg shadow-lg bg-white w-full sm:w-1/3 mt-5 sm:mt-0 hover:bg-gray-50">
                      <Link to="/news">
                        <div className="p-6 h-full">
                          <h5 className="text-gray-900 text-xl font-medium mb-2 group-hover:text-green-500">
                            🏆 Sport news
                          </h5>
                          <p className="text-gray-400 text-base">See what is in the world of sport</p>
                        </div>
                      </Link>
                    </div>
                  </div>
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
