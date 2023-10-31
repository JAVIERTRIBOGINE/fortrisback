import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AccountDetailService } from './detail.service';
import { CreateAccountDetailDto } from './dto/create-account-detail.dto';
// import { CreateAccountDetailDto } from './dto/create-account-detail.dto';
// import { AccountDetail } from 'src/entities/account-detail.entity';

@Controller('detail')
export class AccountDetailController {
  constructor(private readonly accountDetailService: AccountDetailService) { }

  @Post()
  async create(@Body() createAccountDetailDto: CreateAccountDetailDto) {
    console.log('insert');
    return this.accountDetailService.create(createAccountDetailDto);
  }

  @Get()
  async findAll() {
    console.log('find all');
    return this.accountDetailService.findAll();
  }

  @Get(':id')
  async findTransactions(@Param('id') id: string) {
    console.log('find transactions');
    return this.accountDetailService.findTransactions(+id);
  }
}
