import { Module } from '@nestjs/common';
import {AppController} from "../app.controller";
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    providers: []
})
export class UsersModule {}
