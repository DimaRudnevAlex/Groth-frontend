import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';
import { RootState } from '../../index.ts';

const initialState: IAuthState = {
    user: null,
    isLogged: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = {
                ...action.payload.user,
                token: action.payload.token,
            };
            state.isLogged = true;
        },
    },
});

export const { login } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
