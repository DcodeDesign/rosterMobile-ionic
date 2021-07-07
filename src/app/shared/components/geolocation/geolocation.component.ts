import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";
import {TasksService} from "../../../core/services/tasks.service";
import {takeUntil} from "rxjs/operators";
import {Geolocation} from "@capacitor/geolocation";

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public address: any;

  constructor() {
  }

  ngOnInit() {
    this.locate();
  }

  public async locate(): Promise<any> {
    return await Geolocation.getCurrentPosition().then(
      (locate) => {
        this.latitude = locate.coords.latitude;
        this.longitude = locate.coords.longitude;
      }
    );
  };

}
