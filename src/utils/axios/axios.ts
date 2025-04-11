import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: { accept: 'application/json' },
    params: { x_cg_demo_api_key: 'CG-NSDLuEpomQv3aDH1Wy2DUAHi' },
});
