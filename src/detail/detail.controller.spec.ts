import { Test, TestingModule } from '@nestjs/testing';
import { AccountDetailController } from './detail.controller';
import { AccountDetailService } from './detail.service';

describe('AccountDetailController', () => {
  let controller: AccountDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountDetailController],
      providers: [AccountDetailService],
    }).compile();

    controller = module.get<AccountDetailController>(AccountDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
