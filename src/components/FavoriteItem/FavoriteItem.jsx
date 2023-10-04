import { Item } from 'components/FavoriteItem/FavoriteItem.styled';

export const FavoriteItem = ({
  img,
  firstBreedNamePart,
  secondBNPart,
  thirdBNPart,
}) => {
  return (
    <>
      <Item>
        <div>
          <img
            src={img}
            alt="chosen cat"
            width="800px"
            // height="300px"
          />

          {secondBNPart ? (
            thirdBNPart ? (
              <p>
                {firstBreedNamePart + ' ' + secondBNPart + ' ' + thirdBNPart}
              </p>
            ) : (
              <p>{firstBreedNamePart + ' ' + secondBNPart}</p>
            )
          ) : (
            <p>{firstBreedNamePart}</p>
          )}
        </div>
      </Item>
    </>
  );
};
