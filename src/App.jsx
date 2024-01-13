import React from 'react';
// import { RotatingLines } from 'react-loader-spinner';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home, FindCat, NotFound, Favorite, LoginPage, RegisterPage} from 'pages';
import { refreshCurrentUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/findcat" element={<FindCat />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
