import { Injectable } from "@angular/core";
import { BaseServico } from "./base.servico";
import { Usuario } from "src/modelos";
import { environment } from "src/environments/environment";
import { InRecuperarSenha } from "src/modelos/inRecuperarSenha";

@Injectable()
export class UsuarioServico extends BaseServico{
    autenticar(pArgs : Usuario){
        return this.basePost(environment.urlBase + "usuario/autenticar", pArgs);
    }

    recuperarSenha(pArgs : InRecuperarSenha){
        return this.basePost(environment.urlBase + "usuario/recuperarsenha", pArgs);
    }

    gerarCodigoRecuperarSenha(pArgs : InRecuperarSenha){
        return this.basePost(environment.urlBase + "usuario/recuperarsenha", pArgs);
    }
}