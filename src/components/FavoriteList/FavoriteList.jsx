import { FavoriteItem } from 'components/FavoriteItem/FavoriteItem';
import { List, Title } from 'components/FavoriteList/FavoriteList.styled';

export const FavoriteList = () => {
  let dataFromLS = Object.entries(localStorage);
  //   console.log(dataFromLS);

  let favoriteCats = dataFromLS.map(el => el.join(' ').split(' ').reverse());
  //   console.log(favoriteCats);

  return (
    <section>
      <Title> Your Favorite Cats</Title>

      <List>
        {favoriteCats.map(
          cat =>
            cat[0] === 'true' && (
              <FavoriteItem
                key={cat[1]}
                img={cat[1]}
                firstBreedNamePart={cat[2]}
                secondBNPart={cat[3]}
                thirdBNPart={cat[4]}
              />
            )
        )}
      </List>
    </section>
  );
};
