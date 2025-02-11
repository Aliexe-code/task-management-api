import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export type UserPayload = {
  id: string;
  email: string;
  role: string;
};

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserPayload => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    if (!request.user) {
      throw new Error('User not found on request');
    }
    return request.user;
  },
);
