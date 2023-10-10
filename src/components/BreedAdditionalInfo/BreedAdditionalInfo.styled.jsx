import styled from 'styled-components';

export const AdditionalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const LinkDescription = styled.h3`
  text-align: center;
  color: ${p => p.theme.colors.primary};
`;
export const BothLinkBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const LinkBox = styled.div`
  display: inline-block;
  padding: 8px 0;

  border-radius: ${p => p.theme.radii.semiRound};
  background-color: orange;

  & :hover {
    background-color: ${p => p.theme.colors.my2};
    border-radius: ${p => p.theme.radii.semiRound};
  }
`;

export const Link = styled.a`
  padding: 8px 26px;
`;
