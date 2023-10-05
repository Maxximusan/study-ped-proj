import * as SC from './TC.styled';
import { Box } from 'components/Box';
// import { TimeDisplay } from 'components/TimeDisplay/TimeDisplay';
import { Time } from 'components/Time/Time';
export const TC = () => {
  return (
    <Box as="section">
      <Box>
        <SC.MainTitle> Wellcome to "Find your favorite cat" !</SC.MainTitle>

        <SC.SecondTitle>
          Please will register or login to start find cats.
        </SC.SecondTitle>
        {/* <SC.ThirdTitle> Let's go!</SC.ThirdTitle> */}

        <Time />
      </Box>

      {/* <TimeDisplay /> */}
      <SC.ImageContainer></SC.ImageContainer>
    </Box>
  );
};
