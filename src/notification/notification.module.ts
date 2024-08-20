import { TypeOrmModule } from '@nestjs/typeorm';
// service-name.module.ts

import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UsersRepository } from './notification.repositories';
import { NotificationController } from './notification.controller';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]), // Register the entity here as well to create the table
  ],
  providers: [NotificationService, UsersRepository],
  controllers: [NotificationController],
  exports: [NotificationService], // Export the service if you need to use it in other modules
})
export class NotificationModule {}
