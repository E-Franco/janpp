import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EventEmitterService } from 'src/servicos';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  private loading : any;
  constructor(private loadingCtrl : LoadingController, private storage: Storage) {
    EventEmitterService.get('onLoading').subscribe((texto)=> this.onLoading(texto));
    EventEmitterService.get('offLoading').subscribe(()=> this.offLoading());
  }

  async ngOnInit(){
    await this.storage.create();
  }

  onLoading(texto : string){
    let loader = this.loadingCtrl.create({
      message: texto,
      showBackdrop: true
    });

    loader.then((x) => {
      this.loading = x
      this.loading.present();
    });
    
  }

  offLoading(){
    this.loading.dismiss();
  }
}