import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

// export const FUCK = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   min-height: 300px;
//   max-width: 600px;
//   width: 100%;
//   padding: 12px;
//   background-color: white;
//   border-radius: 3px;
//   box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
// `;

export const LikeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;
export const LikeDes = styled.p`
  color: ${p => p.theme.colors.my2};
`;
export const LikeBtn = styled.button`
  background-color: rgb(0 0 0 / 0%);
  /* background-color: rgb(72 72 72); */
  /* background-color: rgba(255, 224, 183, 0.8); */
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
`;
