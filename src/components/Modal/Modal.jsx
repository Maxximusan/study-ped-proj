import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import * as SC from 'components/Modal/Modal.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getLabel } from 'redux/breedOptionsSlice';

import { getFavoriteCats } from 'redux/favoriteCats/favoriteCatsSelectors';

import { addLikeCat } from 'redux/favoriteCats/favoriteCatsOperations';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ imageUrl, onClickModal }) => {
  const dispatch = useDispatch();
  const breed = useSelector(getLabel);
  const usersFavoriteCats = useSelector(getFavoriteCats);

  const checkCats = usersFavoriteCats.map(el => el.imageUrl).includes(imageUrl);

  const [localIsLiked, setLocalIsLiked] = useState(checkCats);

  const [isLiked, setIsLiked] = useLocalStorage(imageUrl, false);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClickModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClickModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClickModal]);

  const handleLike = event => {
    event.preventDefault();
    setLocalIsLiked(prev => !prev);
    dispatch(addLikeCat({ imageUrl, breed }));
    setIsLiked(prev => !prev);
  };

  return createPortal(
    <SC.Overlay onClick={handleBackdropClick}>
      <SC.Modal>
        <SC.LikeBox>
          <SC.LikeDes>
            If you want to add this cat to your favorite - push "Like" here
          </SC.LikeDes>
          {!localIsLiked && !isLiked ? (
            <SC.LikeBtn type="button" onClick={handleLike}>
              <AiOutlineHeart size="2em" color="orangered" />
            </SC.LikeBtn>
          ) : (
            <SC.LikeBtn type="button" onClick={handleLike}>
              <AiFillHeart size="2em" color="orangered" />
            </SC.LikeBtn>
          )}
        </SC.LikeBox>
        <img src={imageUrl} alt="chosen cat" width="600px" height="300px" />
      </SC.Modal>
    </SC.Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClickModal: PropTypes.func.isRequired,
  // label: PropTypes.string.isRequired,
};
