import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Doc24Servico, UsuarioServico } from 'src/servicos';
import { MinhaContaPageRoutingModule } from './minhaconta-routings.module';
import { MinhaContaPage } from './minhaconta.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MinhaContaPageRoutingModule
  ],
  providers: [Doc24Servico, UsuarioServico],
  declarations: [MinhaContaPage]
})
export class MinhaContaPageModule {}