import {NgModule, Optional, SkipSelf, LOCALE_ID} from '@angular/core';

// MODULES
import {ProtectedModule} from '../protected/protected.module';
import {PublicModule} from '../public/public.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

// DATE
import {registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [],
  imports: [
    ProtectedModule,
    PublicModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    PublicModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' },
    NativeGeocoder
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
