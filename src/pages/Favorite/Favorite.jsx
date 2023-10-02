import { useOutletContext } from 'react-router-dom';

const Favorite = () => {
  const {
    URL: [urlForFavorite],
    LIKED: [stateForFavorite],
  } = useOutletContext();
  return (
    <>
      <div>
        <h2> YOUR FAVORITE CATS</h2>
        {stateForFavorite && (
          <img
            src={urlForFavorite}
            alt="chosen cat"
            width="600px"
            height="300px"
          />
        )}
      </div>
    </>
  );
};

export default Favorite;
