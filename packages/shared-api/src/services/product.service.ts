import { productClient } from '../clients/product.client';

export interface CreateProductDto {
    name: string;
    price: number;
    description?: string;
}

export class ProductService {
    async getAll(params?: { page?: number; limit?: number; search?: string }) {
        return productClient.get('/products', { params });
    }

    async getById(id: string) {
        return productClient.get(`/products/${id}`);
    }

    async create(data: CreateProductDto) {
        return productClient.post('/products', data);
    }

    async update(id: string, data: Partial<CreateProductDto>) {
        return productClient.put(`/products/${id}`, data);
    }

    async delete(id: string) {
        return productClient.delete(`/products/${id}`);
    }
}

export const productService = new ProductService();