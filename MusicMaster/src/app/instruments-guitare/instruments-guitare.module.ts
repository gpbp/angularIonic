import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentsGuitarePageRoutingModule } from './instruments-guitare-routing.module';

import { InstrumentsGuitarePage } from './instruments-guitare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentsGuitarePageRoutingModule
  ],
  declarations: [InstrumentsGuitarePage]
})
export class InstrumentsGuitarePageModule {}
