/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  //   powerService: PowerService;
  //   constructor(powerService: PowerService) {
  //     this.powerService = powerService;
  //   }
  constructor(private powerService: PowerService) {}

  getData(data: any) {
    console.log(`use 20 waats of powerService `);
    this.powerService.supplyPower(20);
    return data;
  }
}
