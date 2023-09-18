import ReactStars from 'react-rating-stars-component';
import { Box } from 'components/Box';

export const BreedStarRanking = props => {
  const { rankIndividuality, individuality } = props;
  return (
    <Box as="li">
      <h4> {individuality}</h4>
      <ReactStars
        count={5}
        size={24}
        value={rankIndividuality}
        edit={false}
        activeColor="#ffd700"
      />
    </Box>
  );
};
