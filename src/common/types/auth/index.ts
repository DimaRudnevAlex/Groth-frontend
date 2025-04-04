export interface IPropsLogin {
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
}

export interface IPropsRegister {
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
    setRepeatPassword: (password: string) => void;
    setFirstName: (firstName: string) => void;
    setUsername: (username: string) => void;
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
