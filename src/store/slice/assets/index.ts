import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteAssets } from '../../thunks/assets';
import { RootState } from '../../index.ts';
import { IIAssetsState } from '../../../common/types/assets';

const initialState: IIAssetsState = {
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
    },
});

export const selectFavoriteAssets = (state: RootState) =>
    state.assets.favoriteAssets;

export default assetsSlice.reducer;
