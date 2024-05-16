import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-comunidade',
  templateUrl: 'comunidade.page.html',
  styleUrls: ['comunidade.page.scss']
})
export class ComunidadePage {

  constructor(private router : Router, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.voltar();
    })
  }

  voltar(){
    this.router.navigate(["/tabs/home"]);
  }
}