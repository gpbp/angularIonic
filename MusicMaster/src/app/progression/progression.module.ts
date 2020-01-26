import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ProgressionPage} from './progression.page';
import {FormsModule} from '@angular/forms';
import {ProgressionRoutingModule} from './progression-routing.module';



@NgModule({
  declarations: [ProgressionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ProgressionRoutingModule
  ]
})

export class ProgressionModule { }
