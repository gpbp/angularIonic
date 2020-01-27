import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartitionsPage } from './partitions.page';

const routes: Routes = [
  {
    path: '',
    component: PartitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartitionsPageRoutingModule {}
