import { userClient } from '../clients/user.client';

export interface UpdateProfileDto {
    name?: string;
    avatar?: string;
}

export class UserService {
    async getProfile() {
        return userClient.get('/profile');
    }

    async updateProfile(data: UpdateProfileDto) {
        return userClient.put('/profile', data);
    }

    async getUsers(params?: { page?: number; limit?: number }) {
        return userClient.get('/users', { params });
    }

    async getUserById(id: string) {
        return userClient.get(`/users/${id}`);
    }

    async deleteUser(id: string) {
        return userClient.delete(`/users/${id}`);
    }
}

export const userService = new UserService();