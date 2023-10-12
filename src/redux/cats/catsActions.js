import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchCatsRequest = createAction('breeds/fetchCatsRequest');

//fullfilled
export const fetchCatsSuccess = createAction('breeds/fetchCatsSuccess');

//rejected
export const fetchCatsError = createAction('breeds/fetchCatsError');
