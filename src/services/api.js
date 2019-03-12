import Page from '../database/dataAccess/page';
import config from './apiKey';

const API_URL = 'https://api.themoviedb.org/3';
const MOVIES = 'movie/popular';
const KEY = config.key;

export const getPopularMovies = async () => {
    const url = `${API_URL}/${MOVIES}${KEY}&page=${await Page.getPage()}`;
    console.log(url);
    return fetch(url, {  
        method: 'GET',
    })
    .then(response => response.json())
    .catch(e => console.log(e));
};
