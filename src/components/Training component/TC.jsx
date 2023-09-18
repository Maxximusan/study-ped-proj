import * as SC from './TC.styled';
import { Box } from 'components/Box';

export const TC = () => {
  return (
    <Box as="section">
      <Box>
        <SC.MainTitle> Wellcome to "Find your favorite cat" !</SC.MainTitle>
        <SC.SecondTitle>
          Please will register or login to start find cats.
        </SC.SecondTitle>
        <SC.ThirdTitle> Let's go!</SC.ThirdTitle>
      </Box>
      <Box bg="muted" p={3} display="flex">
        <SC.FirstDiv></SC.FirstDiv>
        <SC.SecDiv></SC.SecDiv>
        <SC.ThirdDiv></SC.ThirdDiv>
      </Box>
    </Box>
  );
};
