import { useState, useEffect } from 'react';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { Loader } from 'components/Loader/Loader';
import { setTimeOutForLoader } from 'helpers/setTimeout';

const Favorite = () => {
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setTimeOutForLoader(setIsLoading);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <FavoriteList />}
      
    </>
  );
};

export default Favorite;
