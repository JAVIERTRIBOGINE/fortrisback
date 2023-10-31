import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) { }


  @Get()
  findAll() {
    return this.rateService.findAll();
  }
}
