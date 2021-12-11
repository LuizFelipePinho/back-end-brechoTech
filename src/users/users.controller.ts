import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Patch,
  ParseIntPipe,
  ForbiddenException,
  Query
} from '@nestjs/common';
import { identity } from 'rxjs';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './users.dto';
import { UserService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import{RolesGuard} from 'src/auth/role.guard';
import { UserRole } from './user-roles-enum';
import{Role} from 'src/auth/role.decorator';
import { ReturnUserDto } from './return-user.dto';


@Controller('users')
export class userController {
  constructor(private service: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Get(':id')
  findUnique(@Param('id') id: number): Promise<User> {
    return this.service.findUniqueUser(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
   @Post('/create')
   async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.service.createUser(createUser);
  }
  //  @Role(UserRole.VENDOR)
  // async createVendorUser(
  //   @Body(ValidationPipe)createVendorUser:CreateUserDto,
  // ):Promise<ReturnUserDto>{
  //   const user= await this.UserService.createVendorUser(CreateUserDto);
  //   return {createVendorUser, message:'Vendedor cadastrado com sucesso'};
  // }
   

  @Patch('updateUser/:id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: CreateUserDto,
  ): Promise<User> {
    return this.service.updateUser(id, updateUser);
  }
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Delete('/delete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.deleteUser(id);
  }
}
function id(id: any, updateUser: CreateUserDto): User | PromiseLike<User> {
  throw new Error('Function not implemented.');
}
