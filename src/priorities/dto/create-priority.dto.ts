import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreatePriorityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;
}
