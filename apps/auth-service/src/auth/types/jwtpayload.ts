
export type JwtPayload = {
    // Thông tin cơ bản
    sub: string;              // User ID
    email: string;
    username?: string;
    role: 'admin' | 'user';
    iat?: number;
    exp?: number;
};