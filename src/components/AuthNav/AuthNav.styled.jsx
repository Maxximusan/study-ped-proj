import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.semiblack};

  &.active {
    color: #da18e0;
  }
  &:hover {
    text-decoration: underline;
  }
`;