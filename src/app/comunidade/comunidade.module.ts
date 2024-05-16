import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComunidadePage } from './comunidade.page';
import { ComunidadePageRoutingModule } from './comunidade-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComunidadePageRoutingModule
  ],
  declarations: [ComunidadePage]
})
export class ComunidadePageModule {}
