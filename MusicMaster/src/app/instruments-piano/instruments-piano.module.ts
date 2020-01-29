import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentsPianoPageRoutingModule } from './instruments-piano-routing.module';

import { InstrumentsPianoPage } from './instruments-piano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentsPianoPageRoutingModule
  ],
  declarations: [InstrumentsPianoPage]
})
export class InstrumentsPianoPageModule {}
