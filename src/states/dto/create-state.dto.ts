import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStateDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
