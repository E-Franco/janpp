import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-club-beneficios',
  templateUrl: 'club-beneficios.page.html',
  styleUrls: ['club-beneficios.page.scss']
})
export class ClubBeneficiosPage {

  constructor(private router : Router, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.voltar();
    })
  }

  voltar(){
    this.router.navigate(["/tabs/home"]);
  }
}