// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav'

import { Box } from 'components/Box';
import { Header } from 'components/SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box maxWidth="1200px" mr="auto" ml="auto" pl={4} pr={4}>
      <Header>
        <Navigation />
        <AuthNav />
      </Header>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
