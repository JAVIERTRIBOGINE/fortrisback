import { Module } from '@nestjs/common';
import { AccountDetailService } from './detail.service';
import { AccountDetailController } from './detail.controller';
import { AccountDetail } from '../entities/account-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { AccountService } from 'src/account/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountDetail, Account])],
  controllers: [AccountDetailController],
  providers: [AccountDetailService, AccountService],
})
export class AccountDetailModule { }
