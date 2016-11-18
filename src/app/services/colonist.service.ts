import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NewColonist ,Colonist } from '../models';

@Injectable()
export default class ColonistService {

  COLONIST_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor(private http: Http) { };

  getColonist(): Observable<Colonist[]> {
    return this.http.get(this.COLONIST_JSON)
               .map((res: Response) => res.json().colonists);
  }
  submitColonist(colonist: NewColonist): Observable<Colonist> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.COLONIST_JSON, { colonist }, { headers })
                    .map((res: Response) => res.json().colonist);
  }
}


