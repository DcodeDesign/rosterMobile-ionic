import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public stateGetAllTasksSubject = new Subject<any>();
  private authApiUrl = environment.domain + '/api/tasks';

  constructor(private http: HttpClient) {
  }

  public getAllTasks(): Subscription {
    return this.http.get(this.authApiUrl).subscribe(
      (datas) => {
        this.stateGetAllTasksSubject.next(datas);
      }
    );
  }

}
