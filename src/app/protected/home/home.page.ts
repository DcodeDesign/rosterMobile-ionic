import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {TasksService} from '../../core/services/tasks.service';
import {Geolocation} from '@capacitor/geolocation';
import {NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public tasks: any[] = [];
  public latitude: number;
  public longitude: number;
  public address: any;

  private options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(private authService: AuthService,
              private tasksService: TasksService,
              private nativeGeocoder: NativeGeocoder) {
  }

  ngOnInit() {
    this.tasksService.getAllTasks();
    this.tasksService.stateGetAllTasksSubject.subscribe(
      (datas) => {
        this.tasks = datas;
      }
    );
    this.locate();
  }

  public async locate(): Promise<any> {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  };


  logout() {
    this.authService.logout();
  }
}
