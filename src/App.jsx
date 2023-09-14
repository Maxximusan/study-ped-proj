import React from 'react';
// import { RotatingLines } from 'react-loader-spinner';

import { Box } from 'components/Box';

import { TC } from 'components/Training component/TC';
import { BreedCharacteristics } from 'components/BreedCharacteristics/BreedCharacteristics';

export const App = () => {
  return (
    <Box as="main">
      <TC />
      <BreedCharacteristics />
    </Box>
  );
};
