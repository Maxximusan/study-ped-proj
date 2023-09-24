import { RotatingLines } from 'react-loader-spinner';

import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="300"
        visible={true}
      />
    </Box>
  );
};
