import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

//access token strategy
export type JwtPayload = {
    sub: string;
    email: string;
}

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {

        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return request?.cookies?.access_token;

                },
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: process.env.AT_SECRET!,
        })

    }
    validate(payload: JwtPayload) {
        return payload;
    }
}