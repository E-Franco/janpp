import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/modelos";
import { EventEmitterService, StorageServico } from "src/servicos";
import { Storage } from '@ionic/storage-angular';
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-minhaconta',
    templateUrl: 'minhaconta.page.html',
    styleUrls: ['minhaconta.page.scss']
})
export class MinhaContaPage{
    public usuario: Usuario = new Usuario();
    constructor(private storageServico : StorageServico, private router : Router, private storage: Storage){
        EventEmitterService.get('minhaconta_configurar_usuario').subscribe((usuario : Usuario) => this.configurarUsuario(usuario));
    }

    async ngOnInit(){
        this.usuario = await this.storage?.get(environment.LocalStorage.C_LS_USUARIO);
        this.usuario.Nome = this.usuario.Nome?.split(" ")[0].trim();
    }

    configurarUsuario(pUsuario: Usuario){
        this.usuario = pUsuario;
        this.usuario.Nome = this.usuario.Nome?.split(" ")[0].trim();
    }

    sair(){
        this.storageServico.removerUsuario();
        this.router.navigate(["/login"]);
    }
}