import { ADD_ARTICLE } from '../actions/index';


const initialState = {
  articles: [
    {
      id: 1,
      title: "A1"
    },
    {
      id: 2,
      title: "A2"
    },
    {
      id: 3,
      title: "A3"
    }
  ]
};

const article = (state = initialState, action) => { //called from action
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default article;