import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OutSaidaBaseWebApi, StatusRetorno, Usuario } from 'src/modelos';
import { InRecuperarSenha } from 'src/modelos/inRecuperarSenha';
import { EventEmitterService, StorageServico, UsuarioServico, UtilService } from 'src/servicos';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  public usuario : Usuario = new Usuario();
  public recuperandoSenha : boolean = false;
  public gerouCodigoRecuperacao : boolean = false;
  public argsRecuperarSenha : InRecuperarSenha = new InRecuperarSenha();

  constructor(private router : Router, private servico : UsuarioServico, private alertController: AlertController,
    private storageServico : StorageServico) {}

  entrar(){
    if(this.usuario.CGC === undefined || this.usuario.CGC === null || this.usuario.CGC === ''){
      const alert = this.alertController.create({header: 'Erro ao entrar', message: "Favor informar o CPF!", buttons: ['OK'] });
      alert.then((x) => x.present());
      return;
    }

    let senhaDescrip = this.usuario.Senha;
    if((this.usuario.Senha !== undefined) && (this.usuario.Senha !== null))      
      this.usuario.Senha = UtilService.EncryptografarAES(this.usuario.Senha);
    
    EventEmitterService.get('onLoading').emit();
    //this.usuario.EmpresaId = environment.EmpresaId;
    this.servico.autenticar(this.usuario)
    .subscribe(
      (ret : OutSaidaBaseWebApi) =>{
        if(ret.Status === StatusRetorno.SUCESSO){            
          this.storageServico.setarUsuario(ret.Entidade);
          EventEmitterService.get('home_configurar_usuario').emit(ret.Entidade);
          EventEmitterService.get('minhaconta_configurar_usuario').emit(ret.Entidade);
          
          this.usuario.Id = ret.Entidade.Id;
          this.usuario.PrimeiroAcesso = ret.Entidade.PrimeiroAcesso;
          //this.storageServico.removerTokenAuth();

          // let token : JwtToken = new JwtToken();
          // token.Token = ret.Entidade.Token;
          // token.Criado_Em = new Date();
          // token.TokenAutenticado = true;
          // token.Expira_Em = 72000;
          // this.storageServico.setarTokenAuth(token)

          // const service = this.injector.get(TokenServico);
          // service.gerarToken(inUsuario).subscribe((ret : OutSaidaBaseWebApi) => this.storageServico.setarTokenAuth(ret.Entidade));

          //delay(2000);
          if(!this.usuario.PrimeiroAcesso)
            this.router.navigate(['/tabs']);
        }
        else{
          this.usuario.Senha = senhaDescrip;
          const alert = this.alertController.create({header: 'Erro ao entrar', message: ret.MsgErro, buttons: ['OK'] });
          alert.then((x) => x.present());
        }
        EventEmitterService.get('offLoading').emit();
      },
      (error) => {
          this.usuario.Senha = senhaDescrip;
          const alert = this.alertController.create({header: 'Ops... Houve um problema', message: "", buttons: ['OK'] });
          alert.then((x) => x.present());
          EventEmitterService.get('offLoading').emit();
      }
    )
  }

  esqueceuSenha(){
      this.recuperandoSenha = true;
      this.argsRecuperarSenha.CGC = this.usuario.CGC;
  }

  voltar(){
      this.recuperandoSenha = false;
      this.gerouCodigoRecuperacao = false;
  }

  gerarCodigoRecuperarSenha(){
    //this.argsRecuperarSenha.EmpresaId = environment.EmpresaId;
    EventEmitterService.get('onLoading').emit();
    this.servico.gerarCodigoRecuperarSenha(this.argsRecuperarSenha)
    .subscribe((ret : OutSaidaBaseWebApi) => {
      if(ret.Status === StatusRetorno.SUCESSO){
        this.gerouCodigoRecuperacao = true;
        const alert = this.alertController.create({header: '', message: "Foi enviado um código para o email.", buttons: ['OK'] });
        alert.then((x) => x.present());
      }
      else{
        const alert = this.alertController.create({header: 'Erro', message: "Erro ao tentar gerar código para recuperação de senha do usuário!", buttons: ['OK'] });
        alert.then((x) => x.present());
      }
      EventEmitterService.get('offLoading').emit();
    },
    (error) => {
      const alert = this.alertController.create({header: 'Erro', message: "Erro ao tentar gerar código para recuperação de senha do usuário!", buttons: ['OK'] });
      alert.then((x) => x.present());
      EventEmitterService.get('offLoading').emit();
    })
  }

  recuperarSenha(){
    if((!this.usuario.PrimeiroAcesso) && ((this.argsRecuperarSenha.CodigoRecuperacao === undefined) || (this.argsRecuperarSenha.CodigoRecuperacao === ""))){
      const alert = this.alertController.create({header: 'Erro ao recuperar senha', message: "Favor informar o código enviado ao email", buttons: ['OK'] });
      alert.then((x) => x.present());
    }

    if(!this.usuario.PrimeiroAcesso){
      this.usuario.Senha = this.argsRecuperarSenha.NovaSenha;
      this.usuario.ConfirmarSenha = this.argsRecuperarSenha.ConfirmarSenha;
    }
    else{
      this.argsRecuperarSenha.UsuarioId = this.usuario.Id;
      this.argsRecuperarSenha.CGC = this.usuario.CGC;
      this.argsRecuperarSenha.PrimeiroAcesso = true;
      this.argsRecuperarSenha.NovaSenha = this.usuario.Senha;
    }

    if(!this.validarSenha()){
      return;
    }

    EventEmitterService.get('onLoading').emit();
    let senhaDescrip : string | undefined = this.argsRecuperarSenha.NovaSenha;
    
    if(this.argsRecuperarSenha.NovaSenha !== undefined)
      this.argsRecuperarSenha.NovaSenha = UtilService.EncryptografarAES(this.argsRecuperarSenha.NovaSenha);

    this.servico.recuperarSenha(this.argsRecuperarSenha)
    .subscribe(
      (ret : OutSaidaBaseWebApi) =>{
        if(ret.Status === StatusRetorno.SUCESSO){
          this.storageServico.setarUsuario(ret.Entidade);
          //EventEmitterService.get('carregarUsuario').emit();
          this.router.navigate(["/tabs"]);
        }
        else{
          this.argsRecuperarSenha.NovaSenha = senhaDescrip;
          const alert = this.alertController.create({header: 'Erro ao recuperar senha', message: ret.MsgErro, buttons: ['OK'] });
          alert.then((x) => x.present());
        }
        EventEmitterService.get('offLoading').emit();
      },
      (error) => {
        this.argsRecuperarSenha.NovaSenha = senhaDescrip;
        const alert = this.alertController.create({header: 'Ops... Houve um problema', buttons: ['OK'] });
        alert.then((x) => x.present());
        EventEmitterService.get('offLoading').emit();
      });
  }

  validarSenha() : boolean{
    if(this.usuario.Senha === undefined || this.usuario.Senha === null || this.usuario.Senha === ''){
      const alert = this.alertController.create({header: 'Erro', message: "Favor informar a Senha!", buttons: ['OK'] });
      alert.then((x) => x.present());
      return false;
    }

    if(this.usuario.Senha !== this.usuario.ConfirmarSenha){
      const alert = this.alertController.create({header: 'Erro', message: "A senha confirmada deve ser igual a senha informada!", buttons: ['OK'] });
      alert.then((x) => x.present());
      return false;
    }
    return true;
  }

  configurarPrimeiroAcesso(){
    
    this.usuario.PrimeiroAcesso = true;

    setTimeout(() => EventEmitterService.get('offLoading').emit(), 3000);
  }
}