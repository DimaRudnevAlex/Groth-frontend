import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import assetsReducer from './slice/assets';

const store = configureStore({
    reducer: {
        auth: authReducer,
        assets: assetsReducer,
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
