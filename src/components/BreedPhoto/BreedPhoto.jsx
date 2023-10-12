import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from 'components/Modal/Modal';
// import { getCatsByBreed } from '../../Api/catApi';

import { getId } from '../../redux/breedOptionsSlice';
import * as catsOperations from 'redux/cats/catsOperations';
import { getCatsByBreed } from 'redux/cats/catsSelectors';

export const BreedPhoto = () => {
  const dispatch = useDispatch();
  const cats = useSelector(getCatsByBreed);
  // const [cats, setCats] = useState([]);
  const [needUrl, setNeedUrl] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);
  const selectedBreed = useSelector(getId);
  

  useEffect(() => {
    if (selectedBreed === null) return;
    // async function fetchCats() {
    //   try {
    //     const data = await getCatsByBreed(selectedBreed);
    //     setCats(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchCats();
    dispatch(catsOperations.fetchCatsByBreed(selectedBreed));
  }, [selectedBreed, dispatch]);

  const catsImages = cats.map(cat => ({
    id: cat.id,
    original: cat.url,
    thumbnail: cat.url,

    // originalWidth: cat.width,
    // originalHeight: cat.height,
  }));
  // console.log(catsImages);

  const toggleModal = () => {
    setIsModalShow(prevState => !prevState);
  };
  const onClick = option => {
    setNeedUrl(option.target.src);
    // console.log(needUrl);
    // console.log(option);

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
            <Modal needUrlForModal={needUrl} onClickModal={toggleModal} />
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
