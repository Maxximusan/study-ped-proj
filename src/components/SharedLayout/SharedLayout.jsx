import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav'
import { UserMenu} from 'components/UserMenu/UserMenu'

import { Box } from 'components/Box';
import { Header } from 'components/SharedLayout/SharedLayout.styled';


import { useAuth } from 'hooks/useAuth'

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth()
  
  return (
    <Box maxWidth="1200px" mr="auto" ml="auto" pl={4} pr={4}>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};
