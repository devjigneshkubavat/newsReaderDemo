import {combineReducers} from 'redux';
import newsSlice from './newsSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-community/async-storage';

const firebasePersistConfig = {
  key: 'favoriteItems',
  storage: AsyncStorage,
  whitelist: ['bookmarkNews'], // only persist this key
};

export const persistedFirebaseReducer = persistReducer(
  firebasePersistConfig,
  newsSlice,
);

let appReducer = combineReducers({
  newsArticles: persistedFirebaseReducer,
});

// export all action
export * from './newsSlice';

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
