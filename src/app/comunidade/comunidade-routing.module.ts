import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadePage } from './comunidade.page';

const routes: Routes = [
  {
    path: '',
    component: ComunidadePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadePageRoutingModule {}