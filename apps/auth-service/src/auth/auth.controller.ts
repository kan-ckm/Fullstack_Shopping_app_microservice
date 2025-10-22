import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { JwtPayload } from './strategies';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    // đăng ký 
    @Post('/signup')
    @HttpCode(201)
    signup(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signup(dto);
    }
    // đăng nhập
    @Post('/signin')
    @HttpCode(201)
    signin(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signin(dto);
    }
    // đăng xuất
    @UseGuards(AuthGuard('jwt'))
    @Post('/logout')
    @HttpCode(200)
    logout(@Req() req: Request) {

        const user = req.user as JwtPayload;
        return this.authService.logout(user['sub']);
    }
    // làm mới token
    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('/refresh-token')
    @HttpCode(200)
    refresh_tokens(@Req() req: Request) {
        const user = req.user as JwtPayload;
        return this.authService.refresh_tokens(user['sub'], user['refreshToken']);
    }
}

