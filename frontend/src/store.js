import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  productListReducer,
} from './reducers/productReducers';
import {
  userSigninReducer,
  userRegisterReducer,
} from './reducers/userReducers';
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {userSignin: {userInfo}};
const reducer = combineReducers({
  productList: productListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
