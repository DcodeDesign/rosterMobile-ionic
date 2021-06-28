import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {TasksService} from '../../core/services/tasks.service';
import {Geolocation} from '@capacitor/geolocation';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public tasks: any[] = [];
  public latitude: number;
  public longitude: number;
  public address: any;
  public form: FormGroup;

  private destroyed$: Subject<boolean> = new Subject<boolean>();


  constructor(private authService: AuthService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getAllTasks();
    this.tasksService.stateGetAllTasksSubject.pipe(takeUntil(this.destroyed$)).subscribe(
      (datas) => {
        this.tasks = datas;
      }
    );
    this.locate();

    this.form = new FormGroup({
      nom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public async locate(): Promise<any> {
    const coordinates = await Geolocation.getCurrentPosition().then(
      (locate) => {
        this.latitude = locate.coords.latitude;
        this.longitude = locate.coords.longitude;
      }
    );
  };

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  submit() {
    console.log(this.form);
  }
}
