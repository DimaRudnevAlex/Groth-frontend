import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterData } from '../../../common/types/auth';
import { instance } from '../../../utils/axios/axios.ts';

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, { rejectWithValue }) => {
        try {
            const user = await instance.post('/auth/login', data);
            sessionStorage.setItem('token', JSON.stringify(user.data.token));
            sessionStorage.setItem(
                'name',
                JSON.stringify(user.data.user.firstName),
            );
            return user.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                rejectWithValue(error.message);
            }
        }
    },
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IRegisterData, { rejectWithValue }) => {
        try {
            const user = await instance.post('/auth/register', data);
            sessionStorage.setItem('token', JSON.stringify(user.data.token));
            sessionStorage.setItem(
                'name',
                JSON.stringify(user.data.user.firstName),
            );
            return user.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                rejectWithValue(error.message);
            }
        }
    },
);
