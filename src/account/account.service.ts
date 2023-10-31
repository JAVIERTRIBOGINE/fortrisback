import { Injectable } from '@nestjs/common';
// import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) { }

  async findAll(): Promise<CreateAccountDto[]> {
    return await this.accountRepository.find();
  }

  async findOne(idRow: number): Promise<CreateAccountDto | undefined> {
    return await this.accountRepository.findOne({
      where: {
        id: idRow,
      },
    });
  }

  async patch(
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Promise<CreateAccountDto> {
    const account = await this.findOne(id);

    if (!account) {
      return undefined;
    }

    const updatedEntity = this.accountRepository.merge(
      account,
      updateAccountDto,
    );

    return await this.accountRepository.save(updatedEntity);
  }
}
