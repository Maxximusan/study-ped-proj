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
Проверяю - логинюсь.
Смотрю лог при получении котов в оператионтс. result.data.favoriteCats

2.3) Нужно передать myBackEnd из authOperations в favoriteCatsOperations чтобы всё заработало


3) Связать котов из базы с теми что в поиске !!!
Сначало нужно при рефрешинге и после логина\регистрации бросать юзера на Favorite - чтобы масив котов заполнился
Просто передал всех котов. map, includes тот imageUrl что приходит и всё ок !!!!!!!!!!!!!! 


4) ДОБАВИТЬ КОТА!
4.1) isLoading для пендинга добавления - не обязательно
4.2) беру операцию addLikeCat в модалку. Записую в него объект с Breed и ImageUrl ( названия как на беке!)
При открытии модалки уже будет сравнение картинок т.к. я выполнил пункт 3
НО! Не будет на кота которого только что добавил - нужен локал сторадж
Очещать локалсторадж при логауте!


5) УДАЛИТЬ КОТА !
5.1) Дополнительный компонент на удаление (кнопка просто) в фаворит айтеме.
isLoading для пендинга удаления + селектор error ---- уже есть в 2.1
Операцию deleteLikedCat - диспатчем в onClick - по кнопке.
И тут в операции удаления -- МЕТОД DELETE а не Get !!!!!!

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
      console.log(result.data);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteLikedCat = createAsyncThunk(
  'favoriteCats/deleteCat',
  async (catId, thunkAPI) => {
    try {
      const result = await myBackEnd.delete(`/api/favoriteCats/${catId}`);
      console.log(result);
      return result.data.necessaryCat;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
