

import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,
        private JwtService: JwtService
    ) { }

    // đăng ký 
    async signup(dto: AuthDto): Promise<Tokens> {
        try {
            const hashedPassword = await this.hashData(dto.password);
            const newUser = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    passoword: hashedPassword
                }
            })
            const tokens = await this.getTokens(newUser.id, newUser.email);
            await this.updateRtHash(newUser.id, tokens.refresh_token)
            return tokens

        } catch (e) {
            console.log('Lỗi', e);
            throw e
        }
    }
    // đăng nhập
    async signin(dto: AuthDto): Promise<Tokens> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: dto.email
                }
            })
            if (!user) {
                throw new NotFoundException("User not found")
            }
            const passwordMatches = await bcrypt.compare(dto.password, user.passoword)
            if (!passwordMatches) {
                throw new ForbiddenException("Invalid password")
            }
            const tokens = await this.getTokens(user.id, user.email);
            await this.updateRtHash(user.id, tokens.refresh_token)
            return tokens

        } catch (e) {
            console.log('lỗi', e)
            throw e
        }
    }
    // đăng xuất
    async logout(userId: string) {
        await this.prisma.user.updateMany({
            where: {
                id: userId,
                hashedRt: {
                    not: null
                },
            }, data: {
                hashedRt: null,
            }
        })
    }
    // làm mới token
    async refresh_tokens(userId: string, rt: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user) {
            throw new ForbiddenException("Access denied")
        }
        if (!user.hashedRt) {
            throw new ForbiddenException("Access denied")
        }
        const rtMatches = await bcrypt.compare(rt, user.hashedRt)
        if (!rtMatches) {
            throw new ForbiddenException("Access denied")
        }
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRtHash(user.id, tokens.refresh_token);
        return tokens;
    }

    // hàm hash data
    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }
    // hàm tạo access token và refresh token
    async getTokens(userId: string, email: string): Promise<Tokens> {
        const [at, rt] = await Promise.all([
            this.JwtService.signAsync({
                sub: userId,
                email: email,
            }, {
                expiresIn: 15 * 60,
                secret: process.env.AT_SECRET

            }),
            this.JwtService.signAsync({
                sub: userId,
                email: email,
            }, {
                expiresIn: 60 * 60 * 24 * 7,
                secret: process.env.RT_SECRET
            }),


        ])
        return {
            access_token: at,
            refresh_token: rt
        }
    }
    // hàm hash và lưu refresh_token  vào db
    async updateRtHash(userId: string, rt: string) {
        const hash = await this.hashData(rt);
        await this.prisma.user.update({
            where: {
                id: userId
            }, data: {
                hashedRt: hash,
            }
        })
    }

}
