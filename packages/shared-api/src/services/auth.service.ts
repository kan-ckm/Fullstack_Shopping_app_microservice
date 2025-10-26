import { authClient } from '../clients/auth.client';

export interface LoginDto {
    email: string;
    password: string;
}

export interface SignupDto {
    email: string;
    password: string;
}

export class AuthService {
    async signup(data: SignupDto) {
        return authClient.post('/auth/signup', data);
    }

    async login(data: LoginDto) {
        return authClient.post('/auth/signin', data);
    }

    async logout() {
        return authClient.post('/auth/logout');
    }

    async refresh() {
        return authClient.post('/auth/refresh');
    }

    async getProfile() {
        return authClient.get('/auth/profile');
    }
}

export const authService = new AuthService();