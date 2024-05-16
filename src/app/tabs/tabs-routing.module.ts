import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) },
      { path: 'comunidade', loadChildren: () => import('../comunidade/comunidade.module').then(m => m.ComunidadePageModule) },
      { path: 'club', loadChildren: () => import('../club-beneficios/club-beneficios.module').then(m => m.ClubBeneficiosPageModule) },
      { path: 'minhaconta', loadChildren: () => import("../minhaconta/minhaconta.module").then(m => m.MinhaContaPageModule) },
      { path: 'comunidade', loadChildren: () => import('../comunidade/comunidade.module').then(m => m.ComunidadePageModule) },
      { path: 'club', loadChildren: () => import('../club-beneficios/club-beneficios.module').then(m => m.ClubBeneficiosPageModule) },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
