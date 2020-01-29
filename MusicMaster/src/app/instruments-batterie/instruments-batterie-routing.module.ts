import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentsBatteriePage } from './instruments-batterie.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsBatteriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentsBatteriePageRoutingModule {}
