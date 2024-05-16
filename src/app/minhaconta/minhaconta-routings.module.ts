import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhaContaPage } from './minhaconta.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaContaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhaContaPageRoutingModule {}
