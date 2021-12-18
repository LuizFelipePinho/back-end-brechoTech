import { UserRole } from '../user-roles-enum';
import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsString({ message: 'Informe um nome de usuário válido' })
  name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Confirme a senha, por favor' })
  passawordconfirmation: string;

  @ApiProperty()
  role: UserRole;
}
