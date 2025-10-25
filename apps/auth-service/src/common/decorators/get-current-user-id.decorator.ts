import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtPayload } from "src/auth/types";

export const GetCurrentUserId = createParamDecorator(
    (_data: undefined, context: ExecutionContext): string => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const request = context.switchToHttp().getRequest();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const user = request.user as JwtPayload;
        return user.sub;
    }
);