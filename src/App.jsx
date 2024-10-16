import React, { lazy } from 'react';
// import { RotatingLines } from 'react-loader-spinner';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { Home, FindCat, NotFound, Favorite, LoginPage, RegisterPage} from 'pages';
import { NotFound } from 'pages';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const FindCat = lazy(() => import('pages/FindCat/FindCat'));
const Favorite = lazy(() => import('pages/Favorite/Favorite'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  React.useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/findcat"
          element={<PrivateRoute component={<FindCat />} redirectTo="/login" />}
        />
        <Route
          path="/favorite"
          element={
            <PrivateRoute component={<Favorite />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/favorite" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/favorite"
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
