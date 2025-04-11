import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../../../utils/axios/axios.ts';

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `coins/${data}/market_chart?vs_currency=usd&days=30&interval=daily`,
            );
            const singleAsset = await coinGeckoApi.get(
                `coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=CG-NSDLuEpomQv3aDH1Wy2DUAHi`,
            );
            return {
                name: data,
                data: assets.data.prices,
                singleAsset: singleAsset.data,
            };
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                rejectWithValue(error.message);
            }
        }
    },
);
