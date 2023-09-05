import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: ${p => p.theme.fonts.droid};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SecondTitle = styled.h2`
  font-family: ${p => p.theme.fonts.prefer};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
`;

export const ThirdTitle = styled.h3`
  font-family: ${p => p.theme.fonts.curier};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FirstDiv = styled.div`
  background-color: ${p => p.theme.colors.my2};
  width: 30px;
  height: 30px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const SecDiv = styled.div`
  background-color: ${p => p.theme.colors.my};
  width: 30px;
  height: 30px;
  margin-bottom: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
`;
export const ThirdDiv = styled.div`
  background-color: ${p => p.theme.colors.primary};
  width: 30px;
  height: 30px;
`;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     'Montserrat' , monospace;
