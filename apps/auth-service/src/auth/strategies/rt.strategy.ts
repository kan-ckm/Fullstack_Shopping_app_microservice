import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { type Request } from 'express';
//refresh token strategy
@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor() {

        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return request?.cookies?.refresh_token
                },
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),

            secretOrKey: process.env.RT_SECRET!,
            passReqToCallback: true,
        })

    }
    validate(req: Request, payload: any) {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const refreshToken =
            req.cookies?.refresh_token ||
            req.get('authorization')?.replace('Bearer', '').trim();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
        return { ...payload, refreshToken };
    }
}