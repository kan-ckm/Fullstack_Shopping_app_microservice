import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
//access token strategy
@Injectable()

export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_SECRET!,
        })

    }
    validate(payload: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return payload;
    }
}