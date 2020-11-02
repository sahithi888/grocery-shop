import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import reducers from './combinedReducers';
import cartReducer from './cart';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer);
export default () => {
    let store = createStore(persistedReducer, {cartItems:[]},applyMiddleware());
    let persistor = persistStore(store);
    return {store, persistor}
}