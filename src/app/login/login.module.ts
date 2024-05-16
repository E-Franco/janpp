import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { UsuarioServico } from 'src/servicos';
import { FormataStringModule } from 'src/diretivas/formata-string-module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    FormataStringModule
  ],
  providers: [UsuarioServico],
  declarations: [LoginPage]
})
export class LoginPageModule {}