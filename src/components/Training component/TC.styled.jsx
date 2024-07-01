import styled from 'styled-components';
import cats from '../../images/cats.jpg';
// ★

export const MainTitle = styled.h1`
  font-family: ${p => p.theme.fonts.droid};
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  /* border-color: #ca0b0b; */
  /* max-width: 900px;
  @media screen and (min-width: 400px) and (max-width: 800px){
    color: red
  }

  @media screen and (min-width: 801px) and (max-width: 1024px){
    color: #51ff00
  } */
`;

export const SecondTitle = styled.h2`
  font-family: ${p => p.theme.fonts.prefer};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  text-align: center;

  @media screen and (min-width: 400px) and (max-width: 800px){
    color: #0011ff;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 801px) and (max-width: 1024px){
    color: #ffee00;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

// export const ThirdTitle = styled.h3`
//   font-family: ${p => p.theme.fonts.curier};
//   margin-bottom: ${p => p.theme.space[3]}px;
// `;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &&::before {
    content: '';
    width: 950px;
    height: 550px;
    background-size: cover;
    background-image: url(${cats});
  }
`;
// export const FirstDiv = styled.div`
//   background-color: ${p => p.theme.colors.my2};
//   width: 30px;
//   height: 30px;
//   margin-bottom: ${p => p.theme.space[2]}px;
// `;
// export const SecDiv = styled.div`
//   background-color: ${p => p.theme.colors.my};
//   width: 30px;
//   height: 30px;
//   margin-bottom: ${p => p.theme.space[2]}px;
//   border: ${p => p.theme.borders.normal};
//   border-radius: ${p => p.theme.radii.round};
// `;
// export const ThirdDiv = styled.div`
//   background-color: ${p => p.theme.colors.primary};
//   width: 30px;
//   height: 30px;
// `;
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     'Montserrat' , monospace
