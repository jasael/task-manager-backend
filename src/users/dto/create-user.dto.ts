import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  IsNumberString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsNumberString()
  @MaxLength(15)
  phone: string;
}
