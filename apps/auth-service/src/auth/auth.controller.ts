import { Body, Controller, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { RtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { type Response } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    // đăng ký 
    @Public()
    @Post('/signup')
    @HttpCode(201)
    async signup(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response,) {
        const result = await this.authService.signup(dto);
        this.setAuthCookies(response, {
            access_token: result.access_token,
            refresh_token: result.refresh_token
        });
        return {
            message: 'User registered successfully',
        }
    }
    // đăng nhập
    @Public()
    @Post('/signin')
    @HttpCode(200)
    async signin(@Body() dto: AuthDto,
        @Res({
            passthrough: true
        }) response: Response) {


        const result = await this.authService.signin(dto);
        this.setAuthCookies(response, {
            access_token: result.access_token,
            refresh_token: result.refresh_token
        });
        return {
            message: 'Đăng nhập thành công'
        };
    }
    // đăng xuất
    @Post('/logout')
    @HttpCode(200)
    logout(@GetCurrentUserId() userId: string) {
        return this.authService.logout(userId);
    }
    // làm mới token
    @Public()
    @UseGuards(RtGuard)
    @Post('/refresh-token')
    @HttpCode(200)
    refresh_tokens(@GetCurrentUserId() userId: string, @GetCurrentUser('refreshToken') refreshToken: string) {
        return this.authService.refresh_tokens(userId, refreshToken);
    }

    // ✅ Helper method: Set cookies
    private setAuthCookies(response: Response, tokens: Tokens) {
        response.cookie('access_token', tokens.access_token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 15 * 60 * 1000,
            path: '/'
        })
        response.cookie('refresh_token', tokens.refresh_token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/'
        })
    }
    // Helper method: Clear cookies
    private clearAuthCookies(response: Response) {
        response.clearCookie('access_token', { path: '/' })
        response.clearCookie('refresh_token', { path: '/' })
    }
}