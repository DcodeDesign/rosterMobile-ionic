import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  public darkMode = new BehaviorSubject(false);

  constructor() { }

  public toggleDarkMode(isDark) {
    this.darkMode.next(isDark);
  }
}
