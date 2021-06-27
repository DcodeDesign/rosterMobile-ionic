import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: LocalStorageService ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = JSON.parse(this.storageService.getStorageToken());
    if (user) {

      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${user.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
