import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentsBatteriePageRoutingModule } from './instruments-batterie-routing.module';

import { InstrumentsBatteriePage } from './instruments-batterie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentsBatteriePageRoutingModule
  ],
  declarations: [InstrumentsBatteriePage]
})
export class InstrumentsBatteriePageModule {}
