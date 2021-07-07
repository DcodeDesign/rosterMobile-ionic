import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";
import {TasksService} from "../../../core/services/tasks.service";
import {takeUntil} from "rxjs/operators";
import {Geolocation} from "@capacitor/geolocation";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  public tasks = this.tasksService.stateGetAllTasksSubject;
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private authService: AuthService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getAllTasks();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }


}

