import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SuccesprogressionPage} from './succesprogression/succesprogression.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'solfege',
    loadChildren: () => import('./solfege/solfege.module').then( m => m.SolfegeModule)
  },
  {
    path: 'succesprogression',
    component: SuccesprogressionPage,
    children: [
      {
        path: 'succes',
        loadChildren: () => import('./succes/succes.module').then( m => m.SuccesModule)
      },
      {
        path: 'progression',
        loadChildren: () => import('./progression/progression.module').then(m => m.ProgressionModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'partition',
    loadChildren: () => import('./partition/partition.module').then( m => m.PartitionPageModule)
  },
  {
    path: 'instruments',
    loadChildren: () => import('./instruments/instruments.module').then( m => m.InstrumentsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
