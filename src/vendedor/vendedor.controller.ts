import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Vendedor } from '@prisma/client';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { VendedorService } from './vendedor.service';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { UserRole } from 'src/users/user-roles-enum';

@ApiTags('vendedor')
@Controller('vendedor')
export class VendedorController {
  constructor(private service: VendedorService) {}

  @Post('register')
  createVendedor(@Body() data: CreateVendedorDto): Promise<Vendedor> {
    delete data.passwordConfirmation;
    return this.service.create(data);
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Vendedor> {
    return this.service.findOne(id);
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  findMany() {
    return this.service.findMany();
  }

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
