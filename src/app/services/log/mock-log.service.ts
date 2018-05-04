import { Job } from '../../models/Job';
import { Log } from '../../models/Log';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { JobService } from '../job/job.service';
import { LogService } from './log.service';
import { Jobs } from '../../mock/jobs';
import { Logs } from '../../mock/logs';
import { filter } from 'rxjs/operators';

export class MockJobService implements LogService {

  getLogs(jobId: string): Observable<Log> {
    return Observable.of(log);
  }
}
