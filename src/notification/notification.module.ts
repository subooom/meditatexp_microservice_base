// service-name.module.ts

import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UsersRepository } from './notification.repositories';
import { NotificationController } from './notification.controller';

@Module({
  imports: [],
  providers: [NotificationService, UsersRepository],
  controllers: [NotificationController],
  exports: [NotificationService], // Export the service if you need to use it in other modules
})
export class NotificationModule {}
