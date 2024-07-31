import { MaxLength, IsEmail, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsStrongPassword()
  password: string;
}
