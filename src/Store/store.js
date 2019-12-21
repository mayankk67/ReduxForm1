import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import rootReducer from '../Reducers/rootReducer'

const reducer = combineReducers({
  form: reduxFormReducer, 
  root: rootReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;