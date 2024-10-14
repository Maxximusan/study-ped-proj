import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from 'components/Modal/Modal';

import { getId } from '../../redux/breedOptionsSlice';
import * as catsOperations from 'redux/cats/catsOperations';
import { getCatsByBreed } from 'redux/cats/catsSelectors';

export const BreedPhoto = () => {
  const dispatch = useDispatch();
  const cats = useSelector(getCatsByBreed);
  const selectedBreed = useSelector(getId);

  const [needUrl, setNeedUrl] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    if (selectedBreed === null) return;

    dispatch(catsOperations.fetchCatsByBreed(selectedBreed));
  }, [selectedBreed, dispatch]);

  const catsImages = cats.map(cat => ({
    id: cat.id,
    original: cat.url,
    thumbnail: cat.url,

    // originalWidth: cat.width,
    // originalHeight: cat.height,
  }));

  const toggleModal = () => {
    setIsModalShow(prevState => !prevState);
  };
  const onClick = option => {
    setNeedUrl(option.target.src);

    toggleModal();
  };

  return (
    <>
      {cats.length > 0 && (
        <div>
          <ImageGallery
            items={catsImages}
            showIndex={true}
            lazyLoad={true}
            thumbnailPosition="left"
            onClick={onClick}
          />

          {isModalShow && (
            <Modal imageUrl={needUrl} onClickModal={toggleModal} />
          )}
        </div>
      )}
    </>
  );
};

BreedPhoto.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
