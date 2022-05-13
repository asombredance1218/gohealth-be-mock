import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginPayload, UserCreatePayload } from './auth.dto';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

/// 87e742bf

@Controller('v1/user')
export class UserController {
  constructor(private readonly authService: AuthService) {}
  @Post('create')
  async createUser(@Body() payload: UserCreatePayload): Promise<User> {
    // noinspection PointlessArithmeticExpressionJS
    payload.region_id = payload.region_id * 1;
    return await this.authService.createUser(payload);
  }

  @Post('login')
  async login(@Body() payload: LoginPayload) {
    return this.authService.login(payload.username, payload.password);
  }
}
