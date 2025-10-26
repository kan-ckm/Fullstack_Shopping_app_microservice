import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export interface InterceptorOptions {
    refreshUrl: string;
    onUnauthorized?: () => void;
}

export function setupRefreshTokenInterceptor(
    instance: AxiosInstance,
    options: InterceptorOptions
) {
    const { refreshUrl, onUnauthorized } = options;

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config as InternalAxiosRequestConfig & {
                _retry?: boolean;
            };

            // 401 && chưa retry
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // Gọi refresh token
                    await axios.post(refreshUrl, {}, { withCredentials: true });

                    // Retry request gốc
                    return instance(originalRequest);
                } catch (refreshError) {
                    // Refresh failed
                    if (onUnauthorized) {
                        onUnauthorized();
                    } else if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );
}