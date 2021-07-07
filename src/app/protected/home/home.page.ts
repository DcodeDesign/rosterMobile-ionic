import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {DarkModeService} from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isDark = true;

  constructor(private authService: AuthService,
              private darkModeService: DarkModeService) {
  }

  ngOnInit() {

  }

  public logout(): void {
    this.authService.logout();
  }

  public toggle($event: any) {
    console.log(this.isDark);
    this.darkModeService.toggleDarkMode(this.isDark);
  }
}
