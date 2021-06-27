import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {PublicRoutingModule} from './public-routing.module';
import {RouteReuseStrategy} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    IonicModule.forRoot(),
    PublicRoutingModule
  ],
  declarations: [],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}]
})
export class PublicModule {
  constructor() {

  }
}
