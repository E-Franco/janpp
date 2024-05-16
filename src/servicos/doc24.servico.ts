import { Injectable } from "@angular/core";
import { InCriarSessao } from "src/modelos";
import { BaseServico } from "./base.servico";
import { environment } from "src/environments/environment";

@Injectable()
export class Doc24Servico extends BaseServico{
    criarSessao(pArgs : InCriarSessao){
        return this.basePost(environment.urlBase + "doc24/criarSessao", pArgs);
    }
}