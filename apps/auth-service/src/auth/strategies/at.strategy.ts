import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
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
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_SECRET!,
        })

    }
    validate(payload: JwtPayload) {
        return payload;
    }
}