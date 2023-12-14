export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41258265-293e4bea479457c1d7a454ddf';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};