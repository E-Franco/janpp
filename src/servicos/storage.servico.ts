import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/modelos';
import { UtilService } from './util.servico';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageServico {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

    // Create and expose methods that users of this service can
    // call, for example:
    set(key: string, value: any) {
        this._storage?.set(key, value);
    }

    get(key : string) : any {
        return this._storage?.get(key);
        // const item = await this._storage?.get(key);
        // return String(item);
    }

    setarUsuario(pUsuario : Usuario){
        if(pUsuario !== undefined){
            this.set(environment.LocalStorage.C_LS_USUARIO, pUsuario);
        }
    }

    obterUsuario() : Usuario{
        console.log(this.get(environment.LocalStorage.C_LS_USUARIO));
        if((this.get(environment.LocalStorage.C_LS_USUARIO) !== null) && (this.get(environment.LocalStorage.C_LS_USUARIO) !== undefined) && 
            (this.get(environment.LocalStorage.C_LS_USUARIO) !== "")){
            let usuario = String(this.get(environment.LocalStorage.C_LS_USUARIO));
            return JSON.parse(usuario);
        }
        return new Usuario();
    }

    removerUsuario() : void{
        this._storage?.remove(environment.LocalStorage.C_LS_USUARIO);
    }
/*
    setarTokenAuth(pToken : JwtToken | undefined){
        if((pToken !== undefined) && (pToken !== null)){
            let dvcIdEncryptado = UtilService.EncryptografarAES(JSON.stringify(pToken));
            localStorage.setItem(environment.LocalStorage.C_LS_TOKENAUTH, dvcIdEncryptado);}
    }

    obterTokenAuth() : JwtToken | undefined{
        if((localStorage.getItem(environment.LocalStorage.C_LS_TOKENAUTH) !== null) && (localStorage.getItem(environment.LocalStorage.C_LS_TOKENAUTH) !== undefined) 
            && (localStorage.getItem(environment.LocalStorage.C_LS_TOKENAUTH) !== "")){
            let tokenEncryptado = String(localStorage.getItem(environment.LocalStorage.C_LS_TOKENAUTH));
            let tokenDecryp = UtilService.DecryptografarAES(tokenEncryptado);
            return JSON.parse(tokenDecryp);
        }
        return undefined;
    }

    removerTokenAuth() : void{
        localStorage.removeItem(environment.LocalStorage.C_LS_TOKENAUTH);
    }*/
}