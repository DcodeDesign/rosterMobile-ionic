import {Injectable} from '@angular/core';
import {TokenModel} from '../../shared/models/token-model';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public setStorage(datas: TokenModel): void {
    localStorage.setItem('token', JSON.stringify(datas));
  }

  public clearStorage(): void {
    localStorage.clear();
  }

  public getStorageToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!(token && JSON.parse(token));
  }

}
