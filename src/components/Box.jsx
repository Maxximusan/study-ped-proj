// import styled from 'styled-components';
import styled from '@emotion/styled';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  typography,
} from 'styled-system';

// export const Box = styled('div')(
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   background,
//   border,
//   position,
//   typography
// );

export const Box = styled.div`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${typography}
`;
