// service-name.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  constructor() {}

  async publish(email: string) {}
}
