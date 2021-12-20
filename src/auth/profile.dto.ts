import { IsString, IsNumber } from 'class-validator';

export class ProfileDto {
  @IsNumber()
  id: number;

  @IsString()
  role: string;
}
