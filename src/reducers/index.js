// Combine reducer
import { combineReducers } from 'redux';

// import reducers
import todos from './todo';
import counter from './counter';
import article from './article';

export default combineReducers({todos, counter, article})