import { AccountDetail } from './entities/account-detail.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { Account } from './entities/account.entity';
import { RateModule } from './rate/rate.module';
import { AccountDetailModule } from './detail/detail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'fortris',
      synchronize: true, // Auto-create tables (only for development)
      autoLoadEntities: true,
      entities: [Account, AccountDetail],
    }),
    AccountModule,
    RateModule,
    AccountDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
