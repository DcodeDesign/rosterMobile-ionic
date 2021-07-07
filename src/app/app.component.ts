import {Component, OnDestroy, OnInit} from '@angular/core';
import {DarkModeService} from './core/services/dark-mode.service';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public dark = this.darKModeService.darkMode;

  constructor(private darKModeService: DarkModeService,
              private menu: MenuController) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
