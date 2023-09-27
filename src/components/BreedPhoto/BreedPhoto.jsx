import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const BreedPhoto = ({ cats, des, breed }) => {
  const [needUrl, setNeedUrl] = useState(null);

  const catsImages = cats.map(cat => ({
    // id: cat.id,
    original: cat.url,
    thumbnail: cat.url,
    // description: des,
    // originalTitle: breed,
    // originalWidth: cat.width,
    // originalHeight: cat.height,
  }));

  const onClick = option => {
    setNeedUrl(option.target.src);
    console.log(needUrl);
  };
  return (
    <ImageGallery
      items={catsImages}
      showIndex={true}
      lazyLoad={true}
      thumbnailPosition="top"
      onClick={onClick}
    />
  );
};

BreedPhoto.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired
  ),
};
