import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
  Item,
  P,
  DeleteBtn,
} from 'components/FavoriteItem/FavoriteItem.styled';

import { getIsLikedCat } from 'redux/favoriteCats/favoriteCatsSelectors';

export const FavoriteItem = ({ img, breed }) => {
  const isLiked = useSelector(getIsLikedCat);
  const [localIsLaked, setLocalIslaked] = useState(isLiked);

  const handleDelete = () => {
    setLocalIslaked(false);
  };

  return (
    <>
      {localIsLaked && (
        <Item>
          <div>
            <img
              src={img}
              alt="chosen cat"
              width="800px"
              // height="300px"
            />
            <P>{breed}</P>
            <DeleteBtn type="button" onClick={handleDelete}>
              Remove this cat from Favorite
            </DeleteBtn>
          </div>
        </Item>
      )}
    </>
  );
};

// export const FavoriteItem = ({
//   img,
//   firstBreedNamePart,
//   secondBNPart,
//   thirdBNPart,
// }) => {
//   return (
//     <>
//       <Item>
//         <div>
//           <img
//             src={img}
//             alt="chosen cat"
//             width="800px"
//             // height="300px"
//           />

//           {secondBNPart ? (
//             thirdBNPart ? (
//               <p>
//                 {firstBreedNamePart + ' ' + secondBNPart + ' ' + thirdBNPart}
//               </p>
//             ) : (
//               <p>{firstBreedNamePart + ' ' + secondBNPart}</p>
//             )
//           ) : (
//             <p>{firstBreedNamePart}</p>
//           )}
//         </div>
//       </Item>
//     </>
//   );
// };

FavoriteItem.propTypes = {
  img: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  // secondBNPart: PropTypes.string,
  // thirdBNPart: PropTypes.string,
};
