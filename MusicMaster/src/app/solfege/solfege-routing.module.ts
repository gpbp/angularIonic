import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolfegePage} from './solfege.page';

const routes: Routes = [
  {
    path: '',
    component: SolfegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolfegeRoutingModule {}
