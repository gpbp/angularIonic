import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SolfegePage} from './solfege.page';
import {FormsModule} from '@angular/forms';
import {SolfegeRoutingModule} from './solfege-routing.module';




@NgModule({
  declarations: [SolfegePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolfegeRoutingModule
  ]
})
export class SolfegeModule { }
