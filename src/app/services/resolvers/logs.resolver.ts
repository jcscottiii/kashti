import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { LogService } from '../log/log.service';
import { Log } from '../../models/Log';

@Injectable()
export class LogsResolver implements Resolve<Log> {

  constructor(private logService: LogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.logService.getLogs(route.paramMap.get('id'));
  }
}
