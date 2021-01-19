//REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//REDUCERS
import AuthReducer from './reducers/authReducer';

const rootReduces = combineReducers({
  auth: AuthReducer,
});

export const STORE = createStore(rootReduces, applyMiddleware(thunk));
