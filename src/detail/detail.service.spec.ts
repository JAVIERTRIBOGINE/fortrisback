import { Test, TestingModule } from '@nestjs/testing';
import { AccountDetailService } from './detail.service';

describe('AccountDetailService', () => {
  let service: AccountDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountDetailService],
    }).compile();

    service = module.get<AccountDetailService>(AccountDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
