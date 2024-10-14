import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.accent};
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  display: block;
  margin-left: auto;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.del};
`;
