import { Module } from '@nestjs/common';
import {AppController} from "../app.controller";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
