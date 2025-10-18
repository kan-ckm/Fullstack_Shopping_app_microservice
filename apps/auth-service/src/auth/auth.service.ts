import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    // đăng ký 

    signup() {

    }
    // đăng nhập
    signin() {

    }
    // đăng xuất
    logout() {

    }
    // làm mới token
    refresh_tokens() {

    }
}
