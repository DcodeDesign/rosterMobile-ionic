import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnDestroy {
  public stateGetAllTasksSubject = new Subject<any>();

  private authApiUrl = environment.domain + '/api/tasks';
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  public getAllTasks(): Subscription {
    return this.http.get(this.authApiUrl)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
      (datas) => {
        this.stateGetAllTasksSubject.next(datas);
      }
    );
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

}
