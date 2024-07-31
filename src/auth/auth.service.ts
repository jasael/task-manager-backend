import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user && this.compareHash(password, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async hashData(data: string) {
    return await bcrypt.hash(data, 10);
  }

  async compareHash(data: string, hash: string) {
    return await bcrypt.compare(data, hash);
  }

  async generateAccessToken(user: any) {
    const payload = { email: user.email, sub: user.id, name: user.name };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
