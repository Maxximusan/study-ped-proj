/*

 - isLoading - заменит isLoading с функцией хелпером в FavoritePage !!!
 - isLiked - просто заменит тот что в Модалке
(+ убирать сердечко лайкнутое в списке после того как удаляется кот фаворит списке)
 - Error - походу просто в реджектеде
*/

export const getFavoriteCats = state => state.favoriteCats.allFavoriteCats;
export const getIsLikedCat = state => state.favoriteCats.isLiked;
export const getError = state => state.favoriteCats.error;
export const getIsLoading = state => state.favoriteCats.isLoading;
