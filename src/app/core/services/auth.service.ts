import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {LocalStorageService} from './local-storage.service';
import {TokenModel} from '../../shared/models/token-model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo = new BehaviorSubject(null);
  private authApiUrl = environment.domain + '/api/signin';

  constructor(private http: HttpClient,
              private storage: LocalStorageService,
              private router: Router) {
  }

  public signin(datas): void {
    this.http.post(this.authApiUrl, datas).subscribe(
      (token: TokenModel) => {
        if (token && token.error === undefined) {
          this.storage.setStorage(token);
          this.userInfo.next(true);
          this.router.navigate(['/private']);
        } else {
          this.storage.clearStorage();
          this.userInfo.next(false);
        }
      }
    );
  }

  public logout() {
    localStorage.removeItem('token');
    this.userInfo.next(null);
    this.router.navigate(['/public']);
  }

}
