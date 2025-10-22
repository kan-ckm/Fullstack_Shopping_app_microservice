import { AuthGuard } from '@nestjs/passport';

export class AuGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }
}