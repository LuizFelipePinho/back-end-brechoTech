import { IsString, IsNumber, IsEmpty } from 'class-validator';

export class ProfileDto {
  @IsNumber()
  @IsEmpty()
  id: number;

  @IsString()
  @IsEmpty()
  role: string;
}
