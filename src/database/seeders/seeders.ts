import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class Seeder {
  private logger: Logger;
  constructor() {
    this.logger = new Logger();
  }
  async seed() {}
}
