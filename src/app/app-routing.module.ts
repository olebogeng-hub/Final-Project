import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ,
  {
    path: 'job-opportunities',
    loadChildren: () => import('./job-opportunities/job-opportunities.module').then( m => m.JobOpportunitiesPageModule)
  },
  
  
  {
    path: 'bursaries',
    loadChildren: () => import('./bursaries/bursaries.module').then( m => m.BursariesPageModule)
  },
  ,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
