import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUserId = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    const user = req.user
    return user.sub
  }
)