import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';

export const BreedPhoto = ({ cats, label }) => {
  const [needUrl, setNeedUrl] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);

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
      <ImageGallery
        items={catsImages}
        showIndex={true}
        lazyLoad={true}
        thumbnailPosition="left"
        onClick={onClick}
      />

      {isModalShow && (
        <Modal
          needUrlForModal={needUrl}
          onClickModal={toggleModal}
          label={label}
        />
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
