import ImageGallery from 'react-image-gallery';

export const BreedPhoto = ({ cats }) => {
  const catsImages = cats.map(cat => ({
    // id: cat.id,
    original: cat.url,
    thumbnail: cat.url,
    // originalWidth: cat.width,
    // originalHeight: cat.height,
  }));

  return <ImageGallery items={catsImages} showIndex={true} lazyLoad={true} />;
};
