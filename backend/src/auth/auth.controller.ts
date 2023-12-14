import { Controller } from '@nestjs/common';
import { Body, Get, Post, Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request) {
    return await this.authService.login(request.user);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return await this.authService.create(user);
  }

  @Post('check-email')
  async checkEmail(@Body() body) {
    const found = await this.authService.checkEmail(body.email);
    return { found };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  whoAmI(@Request() request) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
