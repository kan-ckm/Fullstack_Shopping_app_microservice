import axios from 'axios';
import { setupRefreshTokenInterceptor } from '../interceptors/refresh-token.interceptor';

const AUTH_SERVICE_URL =
    process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || 'http://localhost:3001';

export const authClient = axios.create({
    baseURL: AUTH_SERVICE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Setup interceptor
setupRefreshTokenInterceptor(authClient, {
    refreshUrl: `${AUTH_SERVICE_URL}/auth/refresh`,
    onUnauthorized: () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/login';
        }
    },
});