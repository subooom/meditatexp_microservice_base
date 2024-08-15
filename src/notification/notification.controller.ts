// some.controller.ts

import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './events/CreateUserEvent';
import { NotificationService } from './notification.service';
import { USER_CREATED } from 'src/constants/events';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern(USER_CREATED)
  async handleUserCreated(data: CreateUserEvent) {
    console.log('Notification', data);
    await this.notificationService.publish(data.email);
  }
}
