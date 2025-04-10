import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    isLoading: boolean;
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    isLoading: boolean;
}

export interface IAuthState {
    user: IPublicUser | null;
    isLogged: boolean;
    isLoading: boolean;
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

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    email: string;
    password: string;
    firstName: string;
    username: string;
}
