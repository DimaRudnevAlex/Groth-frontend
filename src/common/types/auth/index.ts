import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}

export interface IAuthState {
    user: IPublicUser | null;
    isLogged: boolean;
}

interface IPublicUser {
    id: number;
    firstName: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    watchlist: [IWatchlist];
}

interface IWatchlist {
    assetId: string;
    createdAt: string;
    id: number;
    name: string;
    updatedAt: string;
    user: number;
}
