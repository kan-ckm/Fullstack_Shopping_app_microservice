import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    // đăng ký 
    @Post('/signup')
    signup() {
        this.authService.signup();
    }
    // đăng nhập
    @Post('/signin')
    signin() {
        this.authService.signin();
    }
    // đăng xuất
    @Post('/logout')
    logout() {
        this.authService.logout();
    }
    // làm mới token
    @Post('/refresh-token')
    refresh_tokens() {
        this.authService.refresh_tokens();
    }
}

