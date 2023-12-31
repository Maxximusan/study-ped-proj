import React from 'react';
// import { RotatingLines } from 'react-loader-spinner';

import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home, FindCat, NotFound, Favorite } from 'pages';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/findcat" element={<FindCat />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
