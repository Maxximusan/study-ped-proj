import PropTypes from 'prop-types';
import { FavoriteItem } from 'components/FavoriteItem/FavoriteItem';
import { List, Title } from 'components/FavoriteList/FavoriteList.styled';
import { useSelector } from 'react-redux';
import { getFavoriteCats } from 'redux/favoriteCats/favoriteCatsSelectors';

export const FavoriteList = () => {
  const allFavoriteCats = useSelector(getFavoriteCats);

  return (
    <section>
      <Title>Your Favorite Cats</Title>

      <List>
        {allFavoriteCats.map(cat => (
          <FavoriteItem
            key={cat._id}
            _id={cat._id}
            img={cat.imageUrl}
            breed={cat.breed}
          />
        ))}
      </List>
    </section>
  );
};

FavoriteList.propTypes = {
  allFavoriteCats: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
    }).isRequired
  ),
};
