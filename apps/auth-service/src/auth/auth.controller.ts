import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { RtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    // đăng ký 
    @Public()
    @Post('/signup')
    @HttpCode(201)
    signup(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signup(dto);
    }
    // đăng nhập
    @Public()
    @Post('/signin')
    @HttpCode(201)
    signin(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signin(dto);
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
}

