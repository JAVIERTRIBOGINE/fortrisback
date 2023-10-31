import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { AccountDetail } from '../entities/account-detail.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateAccountDetailDto } from './dto/create-account-detail.dto';
import { executeUpdateBalance } from 'src/utils';
import { Account } from 'src/entities/account.entity';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AccountDetailService {
  constructor(
    @InjectRepository(AccountDetail)
    private accountDetailRepository: Repository<AccountDetail>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    private accountService: AccountService,
  ) { }

  async findAll(): Promise<CreateAccountDetailDto[]> {
    return await this.accountDetailRepository.find();
  }

  async findTransactions(
    idRow: number,
  ): Promise<CreateAccountDetailDto[] | undefined> {
    return await this.accountDetailRepository.find({
      where: {
        account_id: idRow,
      },
    });
  }

  async create(
    accountDetail: CreateAccountDetailDto,
  ): Promise<CreateAccountDetailDto> {
    const accountDetailNew = this.accountDetailRepository.create(accountDetail);
    const insert = this.accountDetailRepository.save(accountDetailNew);
    executeUpdateBalance(accountDetail.account_id, this.entityManager);
    const lastRow = await this.accountDetailRepository.find({
      order: { confirmation_date: 'DESC' },
      take: 1,
    });
    console.log('lastRow: ', lastRow);

    const update = await this.accountService.patch(lastRow[0].account_id, {
      balance: lastRow[0].balance,
      availableBalance: lastRow[0].balance,
    });
    console.log('update', update);

    return insert;
  }
}
