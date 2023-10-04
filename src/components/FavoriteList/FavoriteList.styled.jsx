import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.prefer};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
  color: ${p => p.theme.colors.darkgreen}
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
