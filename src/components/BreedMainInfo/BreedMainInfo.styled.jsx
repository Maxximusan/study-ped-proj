import styled from 'styled-components';

export const H3 = styled.h3`
  text-align: center;
  font-family: ${p => p.theme.fonts.prefer};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-bottom: ${p => p.theme.space[3]}px; */
  padding: ${p => p.theme.space[3]}px;
`;

export const H4 = styled.h4`
  text-align: center;
  font-family: ${p => p.theme.fonts.curier};
  font-size: ${p => p.theme.fontSizes.s};
  /* margin-bottom: ${p => p.theme.space[3]}px; */
  padding: ${p => p.theme.space[2]}px;
`;

export const P = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  /* margin-bottom: ${p => p.theme.space[3]}px; */
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.darkgreen};
`;