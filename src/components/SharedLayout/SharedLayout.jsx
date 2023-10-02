import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

import { Box } from 'components/Box';
import { Header } from 'components/SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  // let stateForFavorite = false;
  // let urlForFavorite = null;
  const [stateForFavorite, setStateForFavorite] = useState(false);
  const [urlForFavorite, setUrlForFavorite] = useState(null);
  return (
    <Box maxWidth="1200px" mr="auto" ml="auto" pl={4} pr={4}>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet
          context={{
            URL: [urlForFavorite, setUrlForFavorite],
            LIKED: [stateForFavorite, setStateForFavorite],
          }}
        />
      </main>
    </Box>
  );
};
