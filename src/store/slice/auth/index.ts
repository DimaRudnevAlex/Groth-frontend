import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';
import { RootState } from '../../index.ts';
import { loginUser, registerUser } from '../../thunks/auth';

const initialState: IAuthState = {
    user: null,
    isLogged: false,
    isLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = {
                ...action.payload.user,
                token: action.payload.token,
            };
            state.isLogged = true;
            state.isLoading = false;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isLoading = false;
        });

        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = {
                ...action.payload.user,
                token: action.payload.token,
            };
            state.isLogged = true;
            state.isLoading = false;
        });
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
            state.isLoading = false;
        });
    },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoadingUser = (state: RootState) => state.auth.isLoading;

export default authSlice.reducer;
