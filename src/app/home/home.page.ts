import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { InCriarSessao, OutCriarSessao, OutSaidaBaseWebApi, StatusRetorno, Usuario } from 'src/modelos';
import { Doc24Servico, EventEmitterService } from 'src/servicos';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public dias: Array<any> = new Array();
  public usuario: Usuario = new Usuario();

  constructor(private router : Router, private servico : Doc24Servico, private storage: Storage, private alertController: AlertController) {
    EventEmitterService.get('home_configurar_usuario').subscribe((usuario : Usuario) => this.configurarUsuario(usuario));
  }

  async ngOnInit(){
    let user = await this.storage?.get(environment.LocalStorage.C_LS_USUARIO);
    
    if((user === null) || (user === undefined) || (user === undefined) || (user === null) || (user.Id === 0)){
      this.router.navigate(["/login"]);
    }
    else{
      this.usuario = await this.storage?.get(environment.LocalStorage.C_LS_USUARIO);
      this.usuario.Nome = this.usuario.Nome?.split(" ")[0].trim();
      this.popularArrayDias();
    }
  }

  configurarUsuario(pUsuario: Usuario){
    this.usuario = pUsuario;
    this.usuario.Nome = this.usuario.Nome?.split(" ")[0].trim();
    this.popularArrayDias();
  }

  popularArrayDias(){
    let dataAtual = new Date();
    let diaSemana = dataAtual.getDay();
    let diaMes = dataAtual.getDate();
    const ultimoDiaMesAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
    let size = (diaMes + 4);
    let i = (diaMes - 2);
    let diaSemanaIdx = diaSemana - 2;    

    this.dias = new Array<any>();
    for(let count = 0; count <= 6; count++){
      //debugger
      if(i < 0){
        let dtAux = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), i);
        dtAux.setDate(dtAux.getDate() - i);
        i = dtAux.getDate();
      }
      else if(i > ultimoDiaMesAtual.getDate()){
        i = 1;
      }
      
      this.dias.push({ diaSem : this.ajustarDiaSemanaAtualIndice(diaSemanaIdx), diaM : i, selecionado: i === diaMes});
      
      if(diaSemanaIdx >= 6)
        diaSemanaIdx = 0;
      else
        diaSemanaIdx++;
        i++
    }
  }

  ajustarDiaSemanaAtualIndice(pInput : number){
    switch(pInput){
      case -2: return 5;
      case -1: return 6;
      case  7: return 0;
      case  8: return 1;
      default: return pInput;
    }
  }

  converterDiaSemana(pInput: number){
    switch(pInput){
      case 0: return "dom";
      case 1: return "seg";
      case 2: return "ter";
      case 3: return "qua";
      case 4: return "qui";
      case 5: return "sex";
      case 6: return "sáb";
      default: return "dom";
    }
  }

  navegar(rota : string){
    this.router.navigate([ rota ]);
  }

  criarSessao(){
    EventEmitterService.get('onLoading').emit();

    let args : InCriarSessao = new InCriarSessao();
    args.UsuarioId = this.usuario.Id;
    this.servico.criarSessao(args)
    .subscribe(
    (ret : OutSaidaBaseWebApi) => {
      EventEmitterService.get('offLoading').emit();
      if(ret.Status === StatusRetorno.SUCESSO)
        this.abrirBrowser(ret.Entidade);
      else {
        const alert = this.alertController.create({header: 'Oops', message: ret.MsgErro, buttons: ['OK'] });
        alert.then((x) => x.present());
      }      
    },
    (error) => {
      EventEmitterService.get('offLoading').emit();
      const alert = this.alertController.create({header: 'Ops... Houve um problema', message: "", buttons: ['OK'] });
      alert.then((x) => x.present());
    })
  }

  async abrirBrowser(pInput : OutCriarSessao){
    if(pInput.data.url_acceso_paciente !== undefined)
        await Browser.open({ url: pInput.data.url_acceso_paciente, windowName: "_self" });
  }
}