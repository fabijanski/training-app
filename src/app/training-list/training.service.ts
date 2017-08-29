import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITraining } from './training';

@Injectable()
export class TrainingService {
  private _trainingUrl = './api/trainings/trainings.json';

  constructor(private _http: HttpClient) {}

  getTrainings(): Observable<ITraining[]> {
    return this._http.get<ITraining[]>(this._trainingUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTraining(id: number): Observable<ITraining> {
    return this.getTrainings()
      .map((trainings: ITraining[]) => trainings.find(t => t.trainingId === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
