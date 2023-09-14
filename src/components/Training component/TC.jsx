import * as SC from './TC.styled';
import { Box } from 'components/Box';

export const TC = () => {
    return (
      <>
        <Box>
          <SC.MainTitle> Hello my pet project</SC.MainTitle>
          <SC.SecondTitle> this font is different</SC.SecondTitle>
          <SC.ThirdTitle> what is this font?</SC.ThirdTitle>
        </Box>
        <Box bg="muted" p={3} display="flex">
          <SC.FirstDiv></SC.FirstDiv>
          <SC.SecDiv></SC.SecDiv>
          <SC.ThirdDiv></SC.ThirdDiv>
        </Box>
      </>
    );
};
