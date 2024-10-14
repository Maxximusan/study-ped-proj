import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { Loader } from 'components/Loader/Loader';
// import { setTimeOutForLoader } from 'helpers/setTimeout';
import {
  getError,
  getIsLoading,
} from 'redux/favoriteCats/favoriteCatsSelectors';
import { getAllLikedCats } from 'redux/favoriteCats/favoriteCatsOperations';

const Favorite = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeOutForLoader(setIsLoading);
    dispatch(getAllLikedCats());
  }, [dispatch]);

  return (
    <>
      {isLoading && !isError && <Loader />}
      <FavoriteList />
    </>
  );
};

export default Favorite;
