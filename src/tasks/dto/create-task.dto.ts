import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  category_id: number;

  @IsNumber()
  @IsInt()
  @IsPositive()
  state_id: number;

  @IsNumber()
  @IsInt()
  @IsPositive()
  user_id: number;
}
