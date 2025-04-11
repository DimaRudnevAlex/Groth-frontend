export interface IAreaChartProps {
    data: [number[]];
}

export interface ILineChartProps {
    data: IFavoriteAssets[];
}

export interface IIAssetsState {
    assets: [];
    favoriteAssets: IFavoriteAssets[];
}

export interface IFavoriteAssets {
    name: string;
    data: [number[]];
    singleAsset: ISingleAssets[];
}

export interface ISingleAssets {
    current_price: number;
    market_cap_change_percentage_24h: number;
}
