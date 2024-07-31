import {
  Body,
  ConflictException,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.generateAccessToken(req.user);
  }

  @Post('signup')
  async register(@Body() registerDto: RegisterDto) {
    const userExist = await this.userService.findByEmail(registerDto.email);

    if (userExist) {
      throw new ConflictException(
        `Ya existe un usuario registrado con el email: ${registerDto.email}`,
      );
    }

    const hashedPassword = await this.authService.hashData(
      registerDto.password,
    );

    await this.userService.create({
      ...registerDto,
      password: hashedPassword,
    });
  }
}
