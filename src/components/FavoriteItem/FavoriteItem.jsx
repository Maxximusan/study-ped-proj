import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Item,
  P,
  DeleteBtn,
} from 'components/FavoriteItem/FavoriteItem.styled';

import { deleteLikedCat } from 'redux/favoriteCats/favoriteCatsOperations';

export const FavoriteItem = ({ _id, img, breed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLikedCat(_id));
  };

  return (
    <>
      <Item key={_id}>
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
      </Item>
    </>
  );
};

FavoriteItem.propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};
