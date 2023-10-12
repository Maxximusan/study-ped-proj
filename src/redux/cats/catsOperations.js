import * as catsActions from './catsActions';
import * as catsAPI from 'Api/catApi';

export const fetchCats = () => async dispatch => {
  dispatch(catsActions.fetchCatsRequest());

  try {
    const cats = await catsAPI.getBreedsCats();
    dispatch(catsActions.fetchCatsSuccess(cats));
  } catch (error) {
    dispatch(catsActions.fetchCatsError(error));
  }
};
