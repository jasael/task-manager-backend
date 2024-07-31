import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  IsNumberString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsStrongPassword()
  password: string;

  @IsNumberString()
  @MaxLength(15)
  phone: string;
}
