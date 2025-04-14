export interface IAreaChartProps {
    data: [number[]];
}

export interface ILineChartProps {
    data: IFavoriteAssets[];
}

export interface IAssetsState {
    assets: ISingleAssets[];
    favoriteAssets: IFavoriteAssets[];
}

export type ITableProps = Omit<IAssetsState, 'favoriteAssets'>;

export interface IFavoriteAssets {
    name: string;
    data: [number[]];
    singleAsset: ISingleAssets[];
}

export interface ISingleAssets {
    current_price: number;
    market_cap_change_percentage_24h: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
}
