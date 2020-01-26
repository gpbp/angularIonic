import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuccesPage} from './succes.page';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SuccesRoutingModule} from './succes-routing.module';



@NgModule({
  declarations: [SuccesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesRoutingModule
  ]
})
export class SuccesModule { }
