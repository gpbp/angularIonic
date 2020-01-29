import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuccesprogressionPage} from './succesprogression.page';
import { SuccesPage} from '../succes/succes.page';
import { ProgressionPage} from '../progression/progression.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesPage
  },
  {
    path: 'succes',
    component: SuccesPage
  },
  {
    path: 'progression',
    component: ProgressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesprogressionRoutingModule {}
