import ImageGallery from 'react-image-gallery';
import { Box } from 'components/Box';

export const BreedPhoto = ({ cats, choseBreed }) => {
  const catsImages = cats.map(cat => ({
    // id: cat.id,
    original: cat.url,
    thumbnail: cat.url,
    // originalWidth: cat.width,
    // originalHeight: cat.height,
  }));

  return (
    <Box width="100%">
      {choseBreed ? (
        <ImageGallery items={catsImages} showIndex={true} lazyLoad={true} />
      ) : null}
    </Box>
  );
};
