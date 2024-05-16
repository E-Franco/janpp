import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClubBeneficiosPageRoutingModule } from './club-beneficios-routing.module';
import { ClubBeneficiosPage } from './club-beneficios.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ClubBeneficiosPageRoutingModule
  ],
  declarations: [ClubBeneficiosPage]
})
export class ClubBeneficiosPageModule {}
