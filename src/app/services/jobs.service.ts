import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Job } from '../models';

@Injectable()
export default class JobsService {

  JOBS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http) { };

  getJobs(): Observable<Job[]> {   //anotation           
    return this.http.get(this.JOBS_JSON) //returns an array 
                    .map((res: Response) => res.json().jobs);  //map over the array and replace
                       
  }

}
