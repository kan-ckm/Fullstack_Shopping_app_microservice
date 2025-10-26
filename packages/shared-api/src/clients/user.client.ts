import axios from 'axios';
import { setupRefreshTokenInterceptor } from '../interceptors/refresh-token.interceptor';

const USER_SERVICE_URL =
    process.env.NEXT_PUBLIC_USER_SERVICE_URL || 'http://localhost:3002';

const AUTH_SERVICE_URL =
    process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || 'http://localhost:3001';

export const userClient = axios.create({
    baseURL: USER_SERVICE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Setup interceptor - vẫn dùng auth service để refresh
setupRefreshTokenInterceptor(userClient, {
    refreshUrl: `${AUTH_SERVICE_URL}/auth/refresh`,
});