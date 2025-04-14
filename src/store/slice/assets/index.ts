import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteAssets, getTopPricesData } from '../../thunks/assets';
import { RootState } from '../../index.ts';
import { IAssetsState } from '../../../common/types/assets';

const initialState: IAssetsState = {
    assets: [],
    favoriteAssets: [],
};

export const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getFavoriteAssets.fulfilled, (state, action: any) => {
            const repeatName = action.payload.name;
            if (state.favoriteAssets.find((el) => repeatName === el.name))
                return state;
            state.favoriteAssets.push(action.payload);
        });
        builder.addCase(getTopPricesData.fulfilled, (state, action: any) => {
            state.assets = action.payload
                .slice(0, 6)
                .sort((a: any, b: any) => b.current_price - a.current_price);
        });
    },
});

export const selectFavoriteAssets = (state: RootState) =>
    state.assets.favoriteAssets;

export const selectAssets = (state: RootState) => state.assets.assets;

export default assetsSlice.reducer;
