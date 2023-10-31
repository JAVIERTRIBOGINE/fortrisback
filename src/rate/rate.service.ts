import { Injectable } from '@nestjs/common';

import { randomExchageRate } from 'src/utils';
import { Rate } from './entities/rate.entity';

@Injectable()
export class RateService {
  findAll(): Rate {
    return { rate: randomExchageRate() } as Rate;
  }
}
