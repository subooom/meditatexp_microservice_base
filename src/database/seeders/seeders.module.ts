import { Logger, Module } from '@nestjs/common';
import { ConfigProviderModule } from 'src/providers/config/provider.module';
import { MysqlDatabaseProviderModule } from 'src/providers/database/mysql/provider.module';
import { Seeder } from './seeders';

/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [ConfigProviderModule, MysqlDatabaseProviderModule],
  providers: [Logger, Seeder],
})
export class SeederModule {}
