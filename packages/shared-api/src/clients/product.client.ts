import axios from 'axios';
import { setupRefreshTokenInterceptor } from '../interceptors/refresh-token.interceptor';

const PRODUCT_SERVICE_URL =
    process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL || 'http://localhost:3003';

const AUTH_SERVICE_URL =
    process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || 'http://localhost:3001';

export const productClient = axios.create({
    baseURL: PRODUCT_SERVICE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

setupRefreshTokenInterceptor(productClient, {
    refreshUrl: `${AUTH_SERVICE_URL}/refresh`,
});