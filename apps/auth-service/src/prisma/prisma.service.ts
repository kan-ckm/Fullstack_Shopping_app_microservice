import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@repo/auth-db';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await this.$connect();
    }
    async onModuleDestroy() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await this.$disconnect();
    }
}
