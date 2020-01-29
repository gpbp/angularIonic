import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SolfegePage} from './solfege.page';
import {FormsModule} from '@angular/forms';
import {SolfegeRoutingModule} from './solfege-routing.module';
import {TutorialsPipe} from '../pipes/tutorials.pipe';

@NgModule({
  declarations: [SolfegePage, TutorialsPipe],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SolfegeRoutingModule,
    ],
    exports: [TutorialsPipe]
})
export class SolfegeModule { }
