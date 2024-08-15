import { Module } from '@nestjs/common';
import { MysqlDatabaseProviderModule } from './providers/database/mysql/provider.module';
import { ConfigProviderModule } from './providers/config/provider.module';
import { NotificationModule } from './notification/notification.module';
// import { ChatGateway } from './chat.gateway'

@Module({
  imports: [
    ConfigProviderModule,
    MysqlDatabaseProviderModule,
    NotificationModule,
  ],

  //  Uncomment the ChatGateway provider for websocket boilerpate
  // requirements for websockets:
  // "@nestjs/platform-socket.io": "^9.2.1",
  // "@nestjs/websockets": "^9.2.1",
  //

  // providers: [ChatGateway]
})
export class AppModule {}
