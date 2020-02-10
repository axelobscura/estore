import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import pruebaReducer from './prueba/prueba.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    prueba: pruebaReducer,
})