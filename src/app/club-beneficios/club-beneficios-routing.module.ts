import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubBeneficiosPage } from './club-beneficios.page';

const routes: Routes = [
  {
    path: '',
    component: ClubBeneficiosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubBeneficiosPageRoutingModule {}
