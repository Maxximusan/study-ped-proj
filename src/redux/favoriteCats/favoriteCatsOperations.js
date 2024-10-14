/*
ДЕЙСТВИЯ:
1) удаляю что касается локал стораджа в modal, favoritelist & favorite item и сам локал сторадж очищаю.

2) ПОЛУЧИТЬ КОТОВ ЮЗЕРА
2.1) FavoritePage
Селектор isLoading заменяет тот ислоадинг который в favoritePage (не уверен что он нужен в юзэфекте) + селектор error
Фетчу в юзэфекте в FavoritePage - операцию getAllLikedCats (через диспатч).

2.2)
Беру селектор с котами и передаю его в фаворитлист. Это массив поидее. я его мепаю в разметке,
извлекаю картинку и лейбл и id (названиями из бека) передаю в фаворит айтем и там в разметку.

И проверяю - логинюсь.

Смотрю лог при получении котов в оператионтс. result.data.favoriteCats
2.2.1) Нужно передать myBackEnd из authOperations в favoriteCatsOperations чтобы всё заработало

2.3) передать isLiked в сердечко (доп компонент) или просто кнопка зависящая от состояния. и isLiked - в true состоянии.
(добавил локальное состояние как ) 

3) Связать котов из базы с теми что в поиске !!! КАК ??????????
Это будет действовать и при добавлении котов ???????

Сначало нужно при рефрешинге и после логина\регистрации бросать юзера на Favorite - чтобы масив котов заполнился


Просто передал всех котов. map, includes тот imageUrl что приходит и всё ок !!!!!!!!!!!!!! !!!!!!!!!!!!

||||||||||||||||||||||||||||||
Нужно ли мне вообще связывать лайки локальные с isLiked из редакса ????
По идее он (из редакса) нужен только для отображения и удаления !!! 
А при рефреше\ логине и будет браться из картинок фаворит для дальнейших действий !!!!!

||||||||||||||||||||||||||||


4) ДОБАВИТЬ КОТА!
4.1) isLoading для пендинга добавления ?? (возможно не нужен - это в моменте лайканья)
4.2) беру операцию addLikeCat в модалку. Записую в него объект с label и needUrlForModal -- и скорее всего названиями как на беке!!!)
При открытии модалки уже будет сравнение картинок т.к. я выполнил пункт 3
(если объект из базы пуст - возможно нужна будет проверка, НО! я думаю что возможно нет, т.к. isLiked - false в старте и просто поменяется при клике !!!)


5) УДАЛИТЬ КОТА !
5.1) Дополнительный компонент на удаление в фаворит айтеме (уже есть из 2.3).
при удалении - isliked --- false и исчезает картинка
 -- (возможно его изменить на false, хотя - при входе в моддалку будет сравнение)
isLoading для пендинга удаления + селектор error ---- уже есть в 2.1 + 2.3
Операцию deleteLikedCat - диспатчем в onClick - по кнопке.


*/

// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { myBackEnd } from '../auth/authOperations';

export const getAllLikedCats = createAsyncThunk(
  'favoriteCats/fetchCats',
  async (_, thunkAPI) => {
    try {
      const result = await myBackEnd.get('/api/favoriteCats');
      console.log(result);

      return result.data.favoriteCats;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLikeCat = createAsyncThunk(
  'favoriteCats/addCat',
  async (cat, thunkAPI) => {
    try {
      const result = await myBackEnd.post('/api/favoriteCats', cat);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteLikedCat = createAsyncThunk(
  'favoriteCats/deleteCat',
  async (likedCatId, thunkAPI) => {
    try {
      const result = await myBackEnd.get(`/api/favoriteCats/${likedCatId}`);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
