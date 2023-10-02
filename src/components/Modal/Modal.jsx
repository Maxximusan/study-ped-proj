import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useOutletContext } from 'react-router-dom';

import * as SC from 'components/Modal/Modal.styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ needUrlForModal, onClickModal }) => {
  const {
    LIKED: [stateForFavorite, setStateForFavorite],
  } = useOutletContext();
  const [isLiked, setIsLiked] = useLocalStorage('btn' + needUrlForModal, false);

  console.log(isLiked);
  console.log(stateForFavorite);

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
    setIsLiked(prev => !prev);
    event.preventDefault();
    setStateForFavorite(prev => !prev);
  };

  return createPortal(
    <SC.Overlay onClick={handleBackdropClick}>
      <SC.Modal>
        <SC.LikeBox>
          <SC.LikeDes>
            If you want to add this cat to your favorite - push "Like" here
          </SC.LikeDes>
          {!isLiked ? (
            <SC.LikeBtn type="button" onClick={handleLike}>
              <AiOutlineHeart size="2em" color="orangered" />
            </SC.LikeBtn>
          ) : (
            <SC.LikeBtn type="button" onClick={handleLike}>
              <AiFillHeart size="2em" color="orangered" />
            </SC.LikeBtn>
          )}
        </SC.LikeBox>
        <img
          src={needUrlForModal}
          alt="chosen cat"
          width="600px"
          height="300px"
        />
      </SC.Modal>
    </SC.Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  needUrlForModal: PropTypes.string.isRequired,
  onClickModal: PropTypes.func.isRequired,
};
