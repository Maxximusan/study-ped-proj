import { useState, useEffect } from 'react';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { Loader } from 'components/Loader/Loader';
import { setTimeOutForLoader } from 'helpers/setTimeout';

const Favorite = () => {
  const [isLoading, setIsLoading] = useState(false);
  // let dataFromLS = Object.entries(localStorage);
  // console.log(dataFromLS);

  // let testMap = dataFromLS.map(el => el.join(' ').split(' ').reverse());
  // console.log(testMap);
  // ф-я таймера для лоадера

  useEffect(() => {
    setTimeOutForLoader(setIsLoading);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <FavoriteList />}
      {/* <div>
        <h2> YOUR FAVORITE CATS</h2>
        <ul>
          {testMap.map(
            fav =>
              fav[0] === 'true' && (
                <li key={fav[1]}>
                  <div>
                    <img
                      src={fav[1]}
                      alt="chosen cat"
                      width="800px"
                      // height="300px"
                    />

                    {fav[3] ? (
                      fav[4] ? (
                        <p>{fav[2] + ' ' + fav[3] + ' ' + fav[4]}</p>
                      ) : (
                        <p>{fav[2] + ' ' + fav[3]}</p>
                      )
                    ) : (
                      <p>{fav[2]}</p>
                    )}
                  </div>
                </li>
              )
          )}
        </ul>
      </div> */}
    </>
  );
};

export default Favorite;
