// import { useOutletContext } from 'react-router-dom';

const Favorite = () => {
  console.log(localStorage);

  //   let keys = Object.keys(localStorage);
  //   console.log(keys);
  //   let values = Object.values(localStorage);
  //   console.log(values);
  //   let filteredValues = values.filter(value => value.includes(true));
  //   console.log(filteredValues);
  let dataFromLS = Object.entries(localStorage);
  console.log(dataFromLS);

  return (
    <>
      <div>
        <h2> YOUR FAVORITE CATS</h2>

        <ul>
          {dataFromLS.map(
            fav =>
              fav[1] === 'true' && (
                <li key={fav[0]}>
                  <img
                    src={fav[0]}
                    alt="chosen cat"
                    width="600px"
                    height="300px"
                  />
                </li>
              )
          )}
        </ul>

        {/* <ul>
          {keys.map(fav => (
            <li key={fav}>
              <img src={fav} alt="chosen cat" width="600px" height="300px" />
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Favorite;
