import { NgModule } from '@angular/core';
import { SharedModule} from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {GeolocationComponent} from '../../shared/components/geolocation/geolocation.component';
import {TasksComponent} from '../../shared/components/tasks/tasks.component';
import {FormulaireComponent} from '../../shared/components/formulaire/formulaire.component';
import {FormAdvancedComponent} from "../../shared/components/form-advanced/form-advanced.component";
import {FormOtherComponent} from "../../shared/components/form-other/form-other.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, GeolocationComponent, TasksComponent, FormulaireComponent, FormAdvancedComponent, FormOtherComponent]
})
export class HomePageModule {}
