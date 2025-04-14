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
                `coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
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
                return rejectWithValue(error.message);
            }
        }
    },
);

export const getTopPricesData = createAsyncThunk(
    'coins/markets/topPrice',
    async (_, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            );
            return assets.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
