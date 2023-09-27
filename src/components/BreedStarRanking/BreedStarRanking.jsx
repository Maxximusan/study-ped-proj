import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const BreedStarRanking = props => {
  const { rankIndividuality, individuality } = props;
  return (
    <Box as="li">
      <h5> {individuality}</h5>
      <ReactStars
        count={5}
        size={16}
        value={rankIndividuality}
        edit={false}
        activeColor="#ffd700"
      />
    </Box>
  );
};

BreedStarRanking.propTypes = {
  rankIndividuality: PropTypes.number.isRequired,
  individuality: PropTypes.string.isRequired,
};
