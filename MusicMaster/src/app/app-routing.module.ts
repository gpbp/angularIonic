import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SolfegeComponent} from './solfege/solfege.component';
import {SuccesprogressionComponent} from './succesprogression/succesprogression.component';
import {SuccesComponent} from './succes/succes.component';
import {ProgressionComponent} from './progression/progression.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  { path: 'solfege', component: SolfegeComponent },
  { path: 'succesprogression', component: SuccesprogressionComponent },
  { path: 'succes', component: SuccesComponent },
  { path: 'progression', component: ProgressionComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
