import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuccesprogressionPage} from './succesprogression.page';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SuccesprogressionRoutingModule} from './succesprogression-routing.module';



@NgModule({
  declarations: [SuccesprogressionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesprogressionRoutingModule
  ]
})
export class SuccesprogressionModule { }
