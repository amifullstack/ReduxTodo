// // Action types
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_COUNTER = 'ADD_COUNTER';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article});
export const addCounter = counter => ({type: ADD_COUNTER, payload: counter});


