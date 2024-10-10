/**
 1. Получить все лайки юзера (get)

 2. добваить лайк (post)
 в модальном окне
 добавляется картинка и название породы в фаворитлист\айтем
 (тут параметр cat подразумевает {image, breed})

 3. удалить лайк (get)
удаляется картинка и название породы в фаворитлист\айтем
(в модальном окне и в самом фаворит листе !!! - это не тут, но пометка себе)


-------------------
на данный момент --  в BreedPhoto при нажатии на картинку - открывается модалка, 
в ней хук локалсторадж - делается запись в локал сторадж с пометкой false, 
запоминается название породы и картинку. При лайке - true и соответственно 
показвает в favorite list если true.

Мне не нужно ничего записывать в локал сторадж! 
Мне нужно вместо него - передавать запись в базу.
(удалить что связано с локал сторадж и соответственно там будет id из базы - которое я передам в deleteCat)

В модалке я буду в addLike (для бека и базы) передавать картинку и породу.
В Фаворит листе - я буду вызывать Фетч всех лайков пользователя.
(+++ мне нужно как-то связать лайкнутые фотки из базы - с тем что в поиске !!!! 
т.к. например юзер зашел и погнал искать новых котов, он же может наткнуться на те что есть !!!)

+++
В Фаворит листе - мне нужен новый компонент - удалить из фаворит листа (что приравнивается к уберанию лайка в модалке)
И при поиске котов --- если я снимаю лайк -- происходит удаление !!!
*/

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllLikedCats = createAsyncThunk(
  'favoriteCats/fetchCats',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/api/favoriteCats');
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLikeCat = createAsyncThunk(
  'favoriteCats/addCat',
  async (cat, thunkAPI) => {
    try {
      const result = await axios.post('/api/favoriteCats', cat);
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
      const result = await axios.get(`/api/favoriteCats/${likedCatId}`);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
