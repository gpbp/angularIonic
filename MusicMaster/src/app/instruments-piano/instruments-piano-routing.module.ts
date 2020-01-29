import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentsPianoPage } from './instruments-piano.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsPianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentsPianoPageRoutingModule {}
