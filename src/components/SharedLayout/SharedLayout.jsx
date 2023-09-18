import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <Box>
      <Box as="header">
        <Navigation />
      </Box>
      <Outlet />
    </Box>
  );
};
